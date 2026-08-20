import Die from "./Die";

export default function DiceContainer({ data, buttonPressed }) {
  const buttons = data.map((item) => (
    <Die {...item} key={item.id} onPress={buttonPressed} />
  ));
  return <div className="dice-container">{buttons}</div>;
}
