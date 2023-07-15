import {Mark} from "@/app/game/mark"
import {Board} from "@/app/game/board"

export class Game {
    history = [new Board()]
    currentMove = 0
    xIsNext = true
    currentBoard = this.history[this.currentMove]

    handlePlay(i: number) {

        console.log("Click on square", i)
        console.log("this.currentBoard", this.currentBoard)
        if (this.currentBoard.calculateWinner() != Mark.EMPTY) { // Game is won, don't continue
            return
        }
        if (this.currentBoard.at(i) != Mark.EMPTY) { // Field is not empty
            return
        }
        console.log("Register new move")
        const nextSquares = this.currentBoard.copy() // Shallow copy the board to keep the history unchanged
        if (this.xIsNext) {
            nextSquares.setField(i, Mark.X)
        } else {
            nextSquares.setField(i, Mark.O)
        }
        // this.history.push(nextSquares)

        this.history = [...this.history.slice(0, this.currentMove + 1), nextSquares] //remove history and add new move
        // this.history.push(nextHistory)
        // this.history = nextHistory
        this.currentMove = this.history.length - 1
        this.xIsNext = this.currentMove % 2 === 0
        this.currentBoard = this.history[this.currentMove]
    }

    jumpToGameState(move: number) {
        this.currentMove = move
        this.xIsNext = (move % 2) === 0
        this.currentBoard = this.history[this.currentMove]
    }

}