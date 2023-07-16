import Square from "@/app/square"
import {Board} from "@/app/game/board"

export default function BoardUI({board, handlePlay}: { board: Board, handlePlay: (i: number) => void }) {
    function handleClick(i: number) {
        console.log("Click on square", i)
        handlePlay(i)
    }

    return (
        <>
            <div className="board-row">
                <Square value={board.at(0)} onSquareClick={() => handleClick(0)}/>
                <Square value={board.at(1)} onSquareClick={() => handleClick(1)}/>
                <Square value={board.at(2)} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={board.at(3)} onSquareClick={() => handleClick(3)}/>
                <Square value={board.at(4)} onSquareClick={() => handleClick(4)}/>
                <Square value={board.at(5)} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={board.at(6)} onSquareClick={() => handleClick(6)}/>
                <Square value={board.at(7)} onSquareClick={() => handleClick(7)}/>
                <Square value={board.at(8)} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
}

