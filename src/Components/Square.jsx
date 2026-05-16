

function Square({index, value, handleClick}) {
    return (
        <>
            <button className="square" onClick={() => handleClick(index)}>{value}</button>
        </>
    )
    
}

export default Square;