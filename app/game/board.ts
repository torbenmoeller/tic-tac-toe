import {Mark} from "@/app/game/mark"

export class Board {
    state: Mark[]

    constructor(s?: Mark[]) {
        if (s) {
            this.state = s
        } else {
            this.state = Array<Mark>(9).fill(Mark.EMPTY)
        }
    }

    at(i: number) {
        return this.state[i]
    }

    setField(i: number, mark: Mark) {
        this.state[i] = mark
    }

    copy() {
        // Shallow copy the board to keep the history unchanged
        return new Board(this.state.slice())
    }

    calculateWinner() {
        if (this.state === undefined) {
            return Mark.EMPTY
        }
        const winningPossibilities = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (const [a, b, c] of winningPossibilities) {  // Iterate over all winning possibilities
            if (this.at(a) != Mark.EMPTY
                && this.at(a) === this.at(b)
                && this.at(a) === this.at(c)) {
                return this.at(a)
            }
        }
        return Mark.EMPTY
    }

}

