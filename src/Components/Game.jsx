import Board from "./Board";

function Game({currentSquares, handleClick}) {
    return (
        <Board currentSquares={currentSquares} handleClick={handleClick}/>
    )
}

export default Game;