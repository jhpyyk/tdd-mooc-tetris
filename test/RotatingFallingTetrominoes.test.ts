import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { expect } from "chai";
import { Tetromino } from "../src/Tetromino";

describe("Rotating falling tetrominoes T can rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6)
        board.drop(Tetromino.T_SHAPE)
        board.moveDown()
    })

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            ..........
            ....T.....
            ...TTT....
            ..........
            ..........
            ..........
            `
        );
    });

    test("left in empty space", () => {
        board.moveDown()

        board.rotateLeft()

        expect(board.toString()).to.equalShape(
            `
            ..........
            ....T.....
            ...TT.....
            ....T.....
            ..........
            ..........
            `
        )
    })
})