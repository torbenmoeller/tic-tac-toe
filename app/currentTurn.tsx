import {Mark} from "@/app/game/mark"
import {Game} from "@/app/game/game"

export default function CurrentTurn({game}: { game: Game }) {

    const winner = game.currentBoard.calculateWinner()
    let status
    if (winner != Mark.EMPTY) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (game.xIsNext ? 'X' : 'O')
    }

    return (
        <>{status}</>
    )
}

