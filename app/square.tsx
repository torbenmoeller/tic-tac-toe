import {MouseEventHandler} from "react";

export default function Square({value, onSquareClick}: {
    value: string,
    onSquareClick: MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}