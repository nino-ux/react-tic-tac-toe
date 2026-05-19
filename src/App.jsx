import { useState } from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";
import Game from "./Components/Game";

//Pure Functions
function makeMove(squares, currentSquare) {
  const nextSquares = squares.slice();
  nextSquares[currentSquare] = "X";

  console.log(nextSquares)

  return nextSquares

}

//ViewModel (stateful functions)


function getGameProps(state, setState) {
//vars
const currentSquares = state.history[0];

//event handlers
  function handleClick(index) {
    
    const updatedSquares = makeMove(state.history[0], index)

    setState({ history: [updatedSquares] })
  }

  return {
    handleClick,
    currentSquares
  }

}


//Entry point

const DEFAULT_STATE = {
  history: [Array(9).fill(null)],
};

export default function App() {
  const [state, setState] = useState(DEFAULT_STATE);
  const gameProps = getGameProps(state, setState);

  return (
    <Game
      {...gameProps}
      setState={setState}
      state={state}
      setState={setState}
    />
  )
}