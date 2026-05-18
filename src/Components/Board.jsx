import Square from "./Square";

function Board({
  handlePlay,
  squares,
  // setSquares,
  currentMove,
  setCurrentMove,
  handleClick,
  calculateWinner,
  isXNext
}) {

  function handleClick(value) {

    //Place X or O if the square is empty
    if (!squares[value] && !winner) {
      const nextSquares = squares.slice();
      if (isXNext) {
        nextSquares[value] = 'X';
      } else {
        nextSquares[value] = 'O';
      }
      // setSquares(nextSquares);
      // setCurrentMove(currentMove + 1);

      handlePlay(nextSquares);

      calculateWinner(nextSquares);

    }
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
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