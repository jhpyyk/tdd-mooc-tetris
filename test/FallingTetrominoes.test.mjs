import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.ts";
import { Tetromino } from "../src/Tetromino.ts";

function fallToBottom(board) {
    for (let i = 0; i < 10; i++) {
        board.tick();
    }
}

describe("Falling tetrominoes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });

    test("The board starts empty -- added test", () => {
        expect(board.toString()).to.equalShape(
            `..........
       ..........
       ..........
       ..........
       ..........
       ..........`
        );
    });

    test("start from the top middle", () => {
        board.drop(Tetromino.ARIKA_T);

        expect(board.toString()).to.equalShape(
            `...TTT....
       ....T.....
       ..........
       ..........
       ..........
       ..........`
        );
    });

    test("stop when they hit the bottom", () => {
        board.drop(Tetromino.ARIKA_T);
        fallToBottom(board);

        expect(board.toString()).to.equalShape(
            `..........
       ..........
       ..........
       ..........
       ...TTT....
       ....T.....`
        );
    });

    test("stop when they land on another block", () => {
        board.drop(Tetromino.ARIKA_T);
        fallToBottom(board);
        board.drop(Tetromino.ARIKA_T);
        fallToBottom(board);

        expect(board.toString()).to.equalShape(
            `..........
       ..........
       ...TTT....
       ....T.....
       ...TTT....
       ....T.....`
        );
    });
});
