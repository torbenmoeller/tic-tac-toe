"use client"
import {useState} from 'react';
import BoardUI from "@/app/boardUI";
import {Mark} from "@/app/game/mark";
import {Game} from "@/app/game/game";
import {Board} from "@/app/game/board";
import MoveHistory from "@/app/moveHistory";

export default function Page() {
    const [game, setGame] = useState<Game>(new Game());
    const [board, setBoard] = useState<Board>(new Board(undefined));

    function handlePlay(i: number) {
        console.log("handlePlay", i)
        game.handlePlay(i)
        setGame(game)
        setBoard(game.currentBoard);
    }

    function jumpToGameState(nextMove: number) {
        game.jumpToGameState(nextMove)
        setGame(game)
        setBoard(game.currentBoard);
    }

    const winner = game.currentBoard.calculateWinner();
    let status;
    if (winner != Mark.EMPTY) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (game.xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="game">
                <div className="game-board">
                    <BoardUI board={board} handlePlay={handlePlay}/>
                </div>
                <div className="move-history">
                    <MoveHistory history={game.history} jumpToGameState={jumpToGameState}/>
                </div>
            </div>
        </>
    );
}

