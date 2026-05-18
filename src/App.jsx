import { useState } from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";

function Game() {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const [isXNext, setIsXNext] = useState('true');
  // const isXNext = (currentMove % 2 === 0);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1,), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsXNext(!isXNext);
  }

  function goToMove(nextMove) {
    setCurrentMove(nextMove);
    setIsXNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to the move #" + move;
    } else { description = "Go to game start" }

    return (
      <li key={move}>
        <button onClick={() => goToMove(move)}>{description}</button>
      </li>
    )
  })


  return (
    <>
      <div className="game">
        <Board
          squares={currentSquares}
          // setSquares={setSquares}
          handlePlay={handlePlay}
          history={history}
          setHistory={setHistory}
          currentMove={currentMove}
          setCurrentMove={setCurrentMove}
          isXNext={isXNext}
          calculateWinner={calculateWinner}
        />
      </div >
      <div className="game-info">
        <ol>
          {moves}
        </ol>
      </div>
    </>
  )
}

function calculateWinner(sq) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (sq[a] && sq[a] === sq[b] && sq[b] === sq[c] && sq[c]) {
      return sq[a];
    }
  }
}

export default Game