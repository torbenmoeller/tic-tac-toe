import {Board} from "@/app/game/board";

export default function MoveHistory({history, jumpToGameState}: { history: Board[], jumpToGameState: any }) {
    const moves = history.map((squares, move) => {
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

    return (
        <>
            <ol>{moves}</ol>
        </>
    );

}