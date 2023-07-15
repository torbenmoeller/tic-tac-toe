"use client"
import {useState} from 'react';
import BoardUI from "@/app/boardUI";
import {Mark} from "@/app/game/mark";
import {Game} from "@/app/game/game";
import {Board} from "@/app/game/board";

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

    const moves = game.history.map((squares, move) => {
        let description
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpToGameState(move)}>{description}</button>
            </li>
        );
    });



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
                    <BoardUI board={game.currentBoard} handlePlay={handlePlay}/>
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </>
    );
}

