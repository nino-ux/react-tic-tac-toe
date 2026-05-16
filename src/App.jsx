import { useState } from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);


  const winner = calculateWinner(squares);
  let nextPlayer;

  function handleClick(value) {

    const nextSquares = squares.slice();
    // const fillSquare = nextSquares.splice(value, 1, isXNext);
    const isXNext = (currentMove % 2 === 0);

    if (isXNext) {
      nextSquares[value] = "X"
      nextPlayer = "X"
    } else {
      nextSquares[value] = "O"
      nextPlayer = "O"
    }



    //Place X or O if the square is empty
    if (!squares[value] && !winner) {
      setSquares(nextSquares);
      setCurrentMove(currentMove + 1);
      calculateWinner(nextSquares);
    }


  }

  function calculateWinner(sq) {
    let winner;

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (sq[a] && sq[a] === sq[b] && sq[b] === sq[c] && sq[c]) {
        winner = sq[a];
        return winner;
      }
    }
  }


  return (
    <>
      <Board
        squares={squares}
        handleClick={handleClick}
      />
      <div>Current move: {currentMove}</div>
      <div>Up next: {nextPlayer}</div>
      <div>Winner: {winner}</div>
    </>
  )
}

export default App