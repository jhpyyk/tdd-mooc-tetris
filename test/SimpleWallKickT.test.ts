import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { setupFallingShape } from "./testUtils";
import { expect } from "chai";

describe("T can do a simple left wall kick ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        setupFallingShape(board, Tetromino.ARIKA_T.rotateLeft(), 0, -1);
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

    test("when rotating left", () => {
        board.rotateLeft();

        expect(board.toString()).to.equalShape(
            `
        ..........
        .T........
        TTT.......
        ..........
        ..........
        ..........
        `
        );
    });

    test("when rotating right", () => {
        board.rotateRight();

        expect(board.toString()).to.equalShape(
            `
        ..........
        TTT.......
        .T........
        ..........
        ..........
        ..........
        `
        );
    });
});

describe("T can do a simple right wall kick ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        setupFallingShape(board, Tetromino.ARIKA_T.rotateRight(), 0, board.cells[0].length - 2);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
        .........T
        ........TT
        .........T
        ..........
        ..........
        ..........
        `
        );
    });

    test("rotating left when facing right wall", () => {
        board.rotateLeft();

        expect(board.toString()).to.equalShape(
            `
        ..........
        .......TTT
        ........T.
        ..........
        ..........
        ..........
        `
        );
    });

    test("rotating right when facing right wall", () => {
        board.rotateRight();

        expect(board.toString()).to.equalShape(
            `
        ..........
        ........T.
        .......TTT
        ..........
        ..........
        ..........
        `
        );
    });
});

describe("T can do a simple left wall kick from other pieces ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
        Z.........
        Z.........
        Z.........
        Z.........
        ..........
        ..........
        `
        );
        setupFallingShape(board, Tetromino.T_SHAPE.rotateRight(), 0, 0);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
        ZT........
        ZTT.......
        ZT........
        Z.........
        ..........
        ..........
        `
        );
    });

    test("when rotating left", () => {
        board.rotateLeft();

        expect(board.toString()).to.equalShape(
            `
        Z.T.......
        ZTTT......
        Z.........
        Z.........
        ..........
        ..........
        `
        );
    });

    test("when rotating right", () => {
        board.rotateRight();

        expect(board.toString()).to.equalShape(
            `
        Z.........
        ZTTT......
        Z.T.......
        Z.........
        ..........
        ..........
        `
        );
    });
});

describe("T can do a simple right wall kick from other pieces ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
        .........Z
        .........Z
        .........Z
        .........Z
        ..........
        ..........
        `
        );
        setupFallingShape(board, Tetromino.T_SHAPE.rotateLeft(), 0, 7);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
        ........TZ
        .......TTZ
        ........TZ
        .........Z
        ..........
        ..........
        `
        );
    });

    test("when rotating left", () => {
        board.rotateLeft();

        expect(board.toString()).to.equalShape(
            `
        .........Z
        ......TTTZ
        .......T.Z
        .........Z
        ..........
        ..........
        `
        );
    });

    test("when rotating right", () => {
        board.rotateRight();

        expect(board.toString()).to.equalShape(
            `
        .......T.Z
        ......TTTZ
        .........Z
        .........Z
        ..........
        ..........
        `
        );
    });
});
