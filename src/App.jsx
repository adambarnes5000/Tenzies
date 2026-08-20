import Header from "./Header";
import RollControls from "./RollControls";
import DiceContainer from "./DiceContainer";
import { getRoll } from "./utils.js";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const NUM_DICE = 10;

function App() {
  function getInitData() {
    return Array.from({ length: NUM_DICE }, (_, id) => ({
      id,
      value: getRoll(),
      pressed: false,
    }));
  }

  const [data, setData] = useState(() => getInitData());

  const winner = data.every(item => item.value === data[0].value && item.pressed)

  function buttonPressed(i) {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === i ? { ...item, pressed: !item.pressed } : { ...item },
      ),
    );
  }

  function roll() {
    setData((prevData) =>
      prevData.map((item) =>
        item.pressed ? { ...item } : { ...item, value: getRoll() },
      ),
    );
  }

  function playAgain() {
    setData(getInitData());
    setWinner(false);
  }

  return (
    <>
      <main>
        <Header />
        <DiceContainer data={data} buttonPressed={buttonPressed} />
        <RollControls roll={roll} playAgain={playAgain} winner={winner} />
        {winner && <Confetti />}
      </main>
    </>
  );
}

export default App;
