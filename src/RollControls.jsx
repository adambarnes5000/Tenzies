export default function RollControls({ winner, playAgain, roll }) {
  return (
    <div className="rollDiv">
      {winner ? (
        <button className="playAgainButton" onClick={playAgain}>
          Winner! - Play Again
        </button>
      ) : (
        <button className="rollButton" onClick={roll}>
          Roll
        </button>
      )}
    </div>
  );
}
