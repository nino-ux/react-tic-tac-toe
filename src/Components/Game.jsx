import Board from "./Board";

function Game({squares, handleClick}) {
    return (
        <Board squares={squares} handleClick={handleClick}/>
    )
}

export default Game;