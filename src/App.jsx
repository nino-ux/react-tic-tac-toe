import { useState } from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";
import Game from "./Components/Game";

//Pure Functions
function makeMove(squares, currentSquare, currentMove) {
  const nextSquares = squares.slice();
  
  nextSquares[currentSquare] = (currentMove % 2 === 0) ? "X" : "O"

  console.log(currentMove)

  return nextSquares

}

//ViewModel (stateful functions)


function getGameProps(state, setState) {
//vars

const currentMove = state.currentMove;
const squares = state.history[currentMove];

//event handlers
  function handleClick(index) {
    
    const updatedSquares = makeMove(squares, index, currentMove)

    setState({ history: [...state.history, updatedSquares], currentMove: state.currentMove + 1 })

    console.log(state);
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
      setState={setState}
      state={state}
    />
  )
}