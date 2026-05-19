import Square from "./Square";

function Board({ value }) {
  const renderSquare = (i) => {
    <Square key={i} value={value[i]} onSquareClick={() => {}} />
  }

  return (
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
  )
}

export default Board;