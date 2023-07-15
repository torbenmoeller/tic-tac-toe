// import {Mark} from "@/app/game/mark";
// import {Board} from "@/app/game/board";
//
// class TicTacToeBot {
//     constructor(private readonly board: Board) {}
//
//     makeMove(): Mark {
//         const availableMoves = this.board.getAvailableMoves();
//
//         if (availableMoves.length === 0) {
//             return Mark.EMPTY;
//         }
//
//         // Try to win.
//         for (const move of availableMoves) {
//             if (this.board.makeMove(move, Mark.X)) {
//                 return Mark.X;
//             }
//         }
//
//         // Block the opponent from winning.
//         for (const move of availableMoves) {
//             if (this.board.makeMove(move, Mark.O)) {
//                 return Mark.O;
//             }
//         }
//
//         // Just take any available move.
//         return availableMoves[0];
//     }
// }
