import Square from "./Square";

function Board({ squares, handleClick }) {
  return (
    <>
      <div className="board-row">
        <Square
          index={0}
          value={squares[0]}
          handleClick={handleClick} />
        <Square
          index={1}
          value={squares[1]}
          handleClick={handleClick} />
        <Square
          index={2}
          value={squares[2]}
          handleClick={handleClick} />
      </div>
      <div className="board-row">
        <Square
          index={3}
          value={squares[3]}
          handleClick={handleClick} />
        <Square
          index={4}
          value={squares[4]}
          handleClick={handleClick} />
        <Square
          index={5}
          value={squares[5]}
          handleClick={handleClick} />
      </div>
      <div className="board-row">
        <Square
          index={6}
          value={squares[6]}
          handleClick={handleClick} />
        <Square
          index={7}
          value={squares[7]}
          handleClick={handleClick} />
        <Square
          index={8}
          value={squares[8]}
          handleClick={handleClick} />
      </div>
    </>
  )
}

export default Board;