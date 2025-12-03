/**
 * @file Auto-generated documentation for C# scripts
 */

/**
 * Class representing DialogueManager2D.
 * @extends MonoBehaviour
 * @description Defined in Scripts/AI/DialogueManager.cs
 */
class DialogueManager2D {
    /**
     * dialoguePanel
     * @type {GameObject}
     */
    dialoguePanel;

    /**
     * npcText
     * @type {TMP_Text}
     */
    npcText;

    /**
     * playerInput
     * @type {TMP_InputField}
     */
    playerInput;

    /**
     * closeButton
     * @type {GameObject}
     */
    closeButton;

    /**
     * playerMovement
     * @type {PlayerMovement}
     */
    playerMovement;

    /**
     * modelName
     * @type {string}
     */
    modelName;

    /**
     * ollamaUrl
     * @type {string}
     */
    ollamaUrl;

    /**
     * isTalking
     * @type {bool}
     */
    isTalking;

    /**
     * model
     * @type {string}
     */
    model;

    /**
     * prompt
     * @type {string}
     */
    prompt;

    /**
     * stream
     * @type {bool}
     */
    stream;

    /**
     * model
     * @type {string}
     */
    model;

    /**
     * created_at
     * @type {string}
     */
    created_at;

    /**
     * response
     * @type {string}
     */
    response;

    /**
     * done
     * @type {bool}
     */
    done;

    /**
     * total_duration
     * @type {long}
     */
    total_duration;

    /**
     * load_duration
     * @type {long}
     */
    load_duration;

    /**
     * prompt_eval_count
     * @type {int}
     */
    prompt_eval_count;

    /**
     * eval_count
     * @type {int}
     */
    eval_count;

    /**
     * OpenDialogue
     * @access public
     * @return {void}
     */
    OpenDialogue() {}

    /**
     * CloseDialogue
     * @access public
     * @return {void}
     */
    CloseDialogue() {}

    /**
     * OnInputSubmit
     * @access private
     * @return {void}
     * @param {string} text
     */
    OnInputSubmit(text) {}

    /**
     * OnSendClicked
     * @access public
     * @return {void}
     */
    OnSendClicked() {}

    /**
     * SendToOllamaCoroutine
     * @access private
     * @return {IEnumerator}
     * @param {string} userMessage
     */
    SendToOllamaCoroutine(userMessage) {}

    /**
     * LogTelemetry
     * @access private
     * @return {void}
     * @param {string} model
     * @param {float} time
     * @param {int} tokens
     * @param {OllamaResponse} res
     */
    LogTelemetry(model, time, tokens, res) {}

}

/**
 * Class representing NpcInteract2D.
 * @extends MonoBehaviour
 * @description Defined in Scripts/Npc/NPCInteract2D.cs
 */
class NpcInteract2D {
    /**
     * dialogueManager
     * @type {DialogueManager2D}
     */
    dialogueManager;

    /**
     * OnInteract
     * @access public
     * @return {void}
     */
    OnInteract() {}

    /**
     * OnFocus
     * @access public
     * @return {void}
     */
    OnFocus() {}

    /**
     * OnLoseFocus
     * @access public
     * @return {void}
     */
    OnLoseFocus() {}

}

/**
 * Class representing CameraFollow2D.
 * @extends MonoBehaviour
 * @description Defined in Scripts/Player/CameraController.cs
 */
class CameraFollow2D {
    /**
     * target
     * @type {Transform}
     */
    target;

}

/**
 * Class representing PlayerInteraction2D.
 * @extends MonoBehaviour
 * @description Defined in Scripts/Player/PlayerInteraction.cs
 */
class PlayerInteraction2D {
    /**
     * OnTriggerEnter2D
     * @access private
     * @return {void}
     * @param {Collider2D} other
     */
    OnTriggerEnter2D(other) {}

    /**
     * OnTriggerExit2D
     * @access private
     * @return {void}
     * @param {Collider2D} other
     */
    OnTriggerExit2D(other) {}

}

/**
 * Class representing PlayerMovement.
 * @extends MonoBehaviour
 * @description Defined in Scripts/Player/PlayerMovement.cs
 */
class PlayerMovement {
    /**
     * moveSpeed
     * @type {float}
     */
    moveSpeed;

}

