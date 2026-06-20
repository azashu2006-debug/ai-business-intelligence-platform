/**
 * Toast Component
 * Props:
 * - text: toast message
 */

function Toast({ text }) {
  return (
    <div
      style={{
        backgroundColor: "orange",
        padding: "10px",
        color: "white",
      }}
    >
      {text}
    </div>
  );
}

export default Toast;