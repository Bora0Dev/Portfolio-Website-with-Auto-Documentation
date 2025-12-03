using UnityEngine;

public class NpcInteract2D : MonoBehaviour, IInteractable
{
    public DialogueManager2D dialogueManager;

    public void OnInteract()
    {
        if (!dialogueManager.isTalking)
        {
            dialogueManager.OpenDialogue();
        }
    }

    public void OnFocus()
    {
        Debug.Log("Player looking at NPC");
        // Show "Press E to talk" UI here if you want
    }

    public void OnLoseFocus()
    {
        Debug.Log("Player left NPC");
        // Hide "Press E to talk" UI here
    }
}