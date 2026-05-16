import { useState } from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);

  const isXNext = (currentMove % 2 === 1) ? "X" : "O";

  function handleClick(value) {
    const nextSquares = squares.slice();
    const addSquare = nextSquares.splice(value, 1, isXNext);

    setSquares(nextSquares);
    setCurrentMove(currentMove + 1);
  }

  return (
    <>
      <Board
        squares={squares}
        handleClick={handleClick}
      />
    </>
  )
}

export default App