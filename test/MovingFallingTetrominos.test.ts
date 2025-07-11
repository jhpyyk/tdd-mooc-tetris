import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.ts";
import { Tetromino } from "../src/Tetromino.ts";

const fallToBottom = (board: Board) => {
    for (let i = 0; i < 10; i++) {
        board.tick();
    }
};

describe("Moving falling tetrominoes ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.Z_SHAPE);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `...ZZ.....
             ....ZZ....
             ..........
             ..........
             ..........
             ..........`
        );
    });

    test.skip("can be moved left", () => {
        expect(board.toString());
    });
});
