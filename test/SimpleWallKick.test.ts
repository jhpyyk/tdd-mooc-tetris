import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { setupFallingShape } from "./testUtils";
import { expect } from "chai";

describe("T can do a simple wall kick ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        setupFallingShape(board, Tetromino.T_SHAPE.rotateRight(), 0, -1);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
        T.........
        TT........
        T.........
        ..........
        ..........
        ..........
        `
        );
    });

    test("rotating left when facing left wall", () => {
        board.rotateLeft();

        expect(board.toString()).to.equalShape(
            `
        .T........
        TTT.......
        ..........
        ..........
        ..........
        ..........
        `
        );
    });
});
