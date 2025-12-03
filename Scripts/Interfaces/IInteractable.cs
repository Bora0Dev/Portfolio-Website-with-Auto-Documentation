public interface IInteractable
{
    void OnInteract();
    void OnFocus();     // when player comes close
    void OnLoseFocus(); // when player leaves
}