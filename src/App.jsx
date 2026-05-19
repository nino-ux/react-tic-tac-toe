import { useState } from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";
import Game from "./Components/Game";

//Pure Functions

//ViewModel (stateful functions)
function getGameProps(state, setState) {
  const currentSquares = state.history[state.currentMove];

  return (
    {
      
    }
  )
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
    <Game {...gameProps} />
  )
}