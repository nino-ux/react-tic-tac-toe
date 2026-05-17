import { useState } from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const isXNext = (currentMove % 2 === 0);

  // const winner = calculateWinner(squares);

  return (
    <>
      <Board
        squares={squares}
        setSquares={setSquares}
        currentMove={currentMove}
        setCurrentMove={setCurrentMove}
        isXNext={isXNext}
        calculateWinner={calculateWinner}
      />
      <div>Current move: {currentMove}</div>
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