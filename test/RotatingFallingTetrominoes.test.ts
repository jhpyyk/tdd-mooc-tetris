import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { expect } from "chai";

describe("Rotating falling tetrominoes ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.T_SHAPE)
    })

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            ....T.....
            ...TTT....
            ..........
            ..........
            ..........
            ..........
            `
        );
    });
})