function Save({ numFrom, unitFrom, numTo, unitTo, onDelete }) {
    return (
        <div className="conversion">
            <div>{numFrom}&nbsp;{unitFrom}&nbsp;&#8594;&nbsp;{numTo}&nbsp;{unitTo}</div>
            <button onClick={onDelete} style={{ transform: "scale(0.8)" }}>&#10006;</button>
        </div>
    )
}

export default Save