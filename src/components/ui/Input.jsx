/**
 * Input Component
 * Props:
 * - placeholder: input placeholder text
 */

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: "10px",
        width: "250px",
      }}
    />
  );
}

export default Input;