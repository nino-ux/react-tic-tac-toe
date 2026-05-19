import { useState } from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";
import Game from "./Components/Game";

//Pure Functions
function makeMove(squares, currentSquare, currentMove) {

  const nextSquares = squares.slice();

  nextSquares[currentSquare] = (currentMove % 2 === 0) ? "X" : "O"

  return nextSquares

}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[c]) {
      return squares[a];
    }
  }

  return null;
}

//ViewModel (stateful functions)


function getGameProps(state, setState) {
  //vars

  const currentMove = state.currentMove;
  const squares = state.history[currentMove];

  //event handlers
  function handleClick(index) {

    const winner = calculateWinner(squares);

    if (winner || squares[index]) return

    const updatedSquares = makeMove(squares, index, currentMove)

    setState({ history: [...state.history, updatedSquares], currentMove: state.currentMove + 1 })


  }

  return {
    handleClick,
    squares
  }

}


//Entry point

const DEFAULT_STATE = {
  history: [Array(9).fill(null)],
  currentMove: 0
};

export default function App() {
  const [state, setState] = useState(DEFAULT_STATE);
  const gameProps = getGameProps(state, setState);

  return (
    <Game
      {...gameProps}
    />
  )
}