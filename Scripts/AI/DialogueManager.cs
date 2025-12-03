using System;
using System.Collections;
using System.IO;
using System.Text;
using UnityEngine;
using UnityEngine.Networking;
using TMPro;

public class DialogueManager2D : MonoBehaviour
{
    [Header("UI")]
    public GameObject dialoguePanel;
    public TMP_Text npcText;
    public TMP_InputField playerInput;
    public GameObject closeButton;
    public PlayerMovement playerMovement; // Reference to the player movement script

    [Header("Ollama")]
    public string modelName = "llama3";
    public string ollamaUrl = "http://localhost:11434/api/generate";

    public bool isTalking = false;

    void Start()
    {
        if (dialoguePanel != null)
            dialoguePanel.SetActive(false);
        else
            Debug.LogError("Dialogue Panel not assigned in Start!");

        if (playerInput != null)
        {
            // Ensure input field is hidden initially
            playerInput.gameObject.SetActive(false);
            // Listen for Enter key on the input field
            playerInput.onSubmit.AddListener(OnInputSubmit);
        }

        if (closeButton != null)
            closeButton.SetActive(false);

       
    }

    public void OpenDialogue()
    {
        Debug.Log("OpenDialogue called");
        if (dialoguePanel == null)
        {
            Debug.LogError("Dialogue Panel is not assigned in the Inspector!");
            return;
        }
        
        isTalking = true;
        dialoguePanel.SetActive(true);
        Debug.Log("Dialogue Panel set to active");
        
        if (npcText != null)
            npcText.text = "Hello, traveller. What do you seek?";
        
        if (playerInput != null)
        {
            // Show the input field when dialogue opens
            playerInput.gameObject.SetActive(true);
            playerInput.text = "";
            playerInput.ActivateInputField();
        }
        else
        {
            Debug.LogError("Player Input is not assigned!");
        }

        if (closeButton != null)
            closeButton.SetActive(true);

        // Disable player movement
        if (playerMovement != null)
        {
            playerMovement.enabled = false;
            // Stop any residual movement
            Rigidbody2D rb = playerMovement.GetComponent<Rigidbody2D>();
            if (rb != null)
            {
                rb.linearVelocity = Vector2.zero;
            }
        }
    }

    public void CloseDialogue()
    {
        isTalking = false;
        if (dialoguePanel != null)
            dialoguePanel.SetActive(false);
            
        if (playerInput != null)
            playerInput.gameObject.SetActive(false);

        if (closeButton != null)
            closeButton.SetActive(false);

        // Re-enable player movement
        if (playerMovement != null)
        {
            playerMovement.enabled = true;
        }
    }

    // Called when user presses Enter in the Input Field
    private void OnInputSubmit(string text)
    {
        Debug.Log($"OnInputSubmit called with text: {text}");
        if (!string.IsNullOrWhiteSpace(text))
        {
            OnSendClicked();
        }
        // Keep focus if you want to type again immediately, or let it lose focus.
        // playerInput.ActivateInputField(); 
    }

    // Hook this to the Send button OnClick
    public void OnSendClicked()
    {
        Debug.Log("OnSendClicked called");
        if (playerInput == null) return;
        if (string.IsNullOrWhiteSpace(playerInput.text)) return;
        string userMessage = playerInput.text;
        
        // Optional: Clear input immediately so user knows it sent
        playerInput.text = "";
        
        StartCoroutine(SendToOllamaCoroutine(userMessage));
    }

    private IEnumerator SendToOllamaCoroutine(string userMessage)
    {
        float startTime = Time.realtimeSinceStartup;

        string prompt =
            "You are a friendly NPC in a 2D fantasy RPG. Reply in 1–2 short sentences.\n" +
            "Player: " + userMessage;

        var requestData = new OllamaRequest
        {
            model = modelName,
            prompt = prompt,
            stream = false
        };

        string jsonBody = JsonUtility.ToJson(requestData);

        using (UnityWebRequest req = new UnityWebRequest(ollamaUrl, "POST"))
        {
            byte[] bodyRaw = Encoding.UTF8.GetBytes(jsonBody);
            req.uploadHandler = new UploadHandlerRaw(bodyRaw);
            req.downloadHandler = new DownloadHandlerBuffer();
            req.SetRequestHeader("Content-Type", "application/json");

            yield return req.SendWebRequest();

            float endTime = Time.realtimeSinceStartup;
            float inferenceTime = endTime - startTime;

            if (req.result == UnityWebRequest.Result.Success)
            {
                string responseJson = req.downloadHandler.text;
                // Parse the JSON into our class
                OllamaResponse ollamaRes = JsonUtility.FromJson<OllamaResponse>(responseJson);
                string reply = ollamaRes.response;

                // Token count approximation: number of words
                int tokensApprox = string.IsNullOrEmpty(reply) ? 0 : reply.Split(' ').Length;

                if (npcText != null)
                    npcText.text = reply;
                LogTelemetry(ollamaRes.model, inferenceTime, tokensApprox, ollamaRes);
            }
            else
            {
                if (npcText != null)
                    npcText.text = "The NPC is silent... (error)";
                Debug.LogError(req.error);
            }
        }
    }

    private void LogTelemetry(string model, float time, int tokens, OllamaResponse res)
    {
        string platform = Application.platform.ToString();
        string hardware =
            $"{SystemInfo.processorType}, {SystemInfo.systemMemorySize}MB RAM, {SystemInfo.graphicsDeviceName}";

        string logLine =
            $"[{DateTime.Now}] Model={model}, Time={time:F2}s, Tokens≈{tokens}, " +
            $"PromptEval={res.prompt_eval_count}, EvalCount={res.eval_count}, " +
            $"Platform={platform}, Hardware={hardware}";

        Debug.Log(logLine);

        string path = Path.Combine(Application.persistentDataPath, "ai_logs.txt");
        File.AppendAllText(path, logLine + Environment.NewLine);
    }
    
}
[Serializable]
public class OllamaRequest
{
    public string model;
    public string prompt;
    public bool stream = false;
}

[Serializable]
public class OllamaResponse
{
    public string model;
    public string created_at;
    public string response;
    public bool done;
    public long total_duration;
    public long load_duration;
    public int prompt_eval_count;
    public int eval_count;
}