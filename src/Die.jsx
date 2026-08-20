export default function Die({ value, pressed, onPress, id }) {
  return (
    <button
      className={pressed ? "pressed" : "notPressed"}
      onClick={() => onPress(id)}
    >
      {value}
    </button>
  );
}
