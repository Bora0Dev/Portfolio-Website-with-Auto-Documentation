/**
 * @class DialogueManager2D
 * @description Manages the dialogue system in a 2D game, handling UI interactions and communication with the Ollama AI model.
 * @extends MonoBehaviour
 */

/**
 * @memberof DialogueManager2D
 * @name dialoguePanel
 * @type {GameObject}
 * @description The UI panel containing the dialogue elements.
 */

/**
 * @memberof DialogueManager2D
 * @name npcText
 * @type {TMP_Text}
 * @description The text component displaying the NPC's dialogue.
 */

/**
 * @memberof DialogueManager2D
 * @name playerInput
 * @type {TMP_InputField}
 * @description The input field for the player to type messages.
 */

/**
 * @memberof DialogueManager2D
 * @name closeButton
 * @type {GameObject}
 * @description The button to close the dialogue panel.
 */

/**
 * @memberof DialogueManager2D
 * @name playerMovement
 * @type {PlayerMovement}
 * @description Reference to the player movement script to disable movement during dialogue.
 */

/**
 * @memberof DialogueManager2D
 * @name modelName
 * @type {string}
 * @default "llama3"
 * @description The name of the Ollama model to use.
 */

/**
 * @memberof DialogueManager2D
 * @name ollamaUrl
 * @type {string}
 * @default "http://localhost:11434/api/generate"
 * @description The URL of the Ollama API endpoint.
 */

/**
 * @memberof DialogueManager2D
 * @name isTalking
 * @type {bool}
 * @default false
 * @description Indicates whether a dialogue session is currently active.
 */

/**
 * @function OpenDialogue
 * @memberof DialogueManager2D
 * @description Opens the dialogue panel, initializes UI elements, and disables player movement.
 */

/**
 * @function CloseDialogue
 * @memberof DialogueManager2D
 * @description Closes the dialogue panel, hides UI elements, and re-enables player movement.
 */

/**
 * @function OnSendClicked
 * @memberof DialogueManager2D
 * @description Handles the event when the send button is clicked or Enter is pressed. Sends the user's message to the Ollama API.
 */

/**
 * @class OllamaRequest
 * @description Represents the JSON request body sent to the Ollama API.
 */

/**
 * @memberof OllamaRequest
 * @name model
 * @type {string}
 */

/**
 * @memberof OllamaRequest
 * @name prompt
 * @type {string}
 */

/**
 * @memberof OllamaRequest
 * @name stream
 * @type {bool}
 * @default false
 */

/**
 * @class OllamaResponse
 * @description Represents the JSON response received from the Ollama API.
 */

/**
 * @memberof OllamaResponse
 * @name model
 * @type {string}
 */

/**
 * @memberof OllamaResponse
 * @name created_at
 * @type {string}
 */

/**
 * @memberof OllamaResponse
 * @name response
 * @type {string}
 */

/**
 * @memberof OllamaResponse
 * @name done
 * @type {bool}
 */

/**
 * @memberof OllamaResponse
 * @name total_duration
 * @type {long}
 */

/**
 * @memberof OllamaResponse
 * @name load_duration
 * @type {long}
 */

/**
 * @memberof OllamaResponse
 * @name prompt_eval_count
 * @type {int}
 */

/**
 * @memberof OllamaResponse
 * @name eval_count
 * @type {int}
 */
