/**
 * Button Component
 * Props:
 * - text: button label
 */

function Button({ text }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;