/**
 * Modal Component
 * Props:
 * - message: modal text
 */

function Modal({ message }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h3>Modal</h3>
      <p>{message}</p>
    </div>
  );
}

export default Modal;