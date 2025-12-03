using UnityEngine;

[RequireComponent(typeof(Collider2D))]
public class PlayerInteraction2D : MonoBehaviour
{
    private IInteractable currentTarget;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.E) && currentTarget != null)
        {
            currentTarget.OnInteract();
        }
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        IInteractable interactable = other.GetComponent<IInteractable>();
        if (interactable != null)
        {
            currentTarget = interactable;
            currentTarget.OnFocus();
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        IInteractable interactable = other.GetComponent<IInteractable>();
        if (interactable != null && interactable == currentTarget)
        {
            currentTarget.OnLoseFocus();
            currentTarget = null;
        }
    }
}