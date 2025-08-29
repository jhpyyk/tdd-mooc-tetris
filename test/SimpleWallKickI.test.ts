import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { setupFallingShape } from "./testUtils";
import { expect } from "chai";

describe("I_SHAPE can do a simple left wall kick ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        setupFallingShape(board, Tetromino.ARIKA_I.rotateRight(), 0, -1);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
        .I........
        .I........
        .I........
        .I........
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
            IIII......
            ..........
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
            IIII......
            ..........
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
        setupFallingShape(board, Tetromino.I_SHAPE.rotateLeft(), 0, board.cells[0].length - 3);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
        .........I
        .........I
        .........I
        .........I
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
            ..........
            ......IIII
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
            ..........
            ......IIII
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
        setupFallingShape(board, Tetromino.I_SHAPE.rotateRight(), 0, 0);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
        Z.I.......
        Z.I.......
        Z.I.......
        Z.I.......
        ..........
        ..........
        `
        );
    });

    test("when rotating left", () => {
        board.rotateLeft();

        expect(board.toString()).to.equalShape(
            `
            Z.........
            Z.........
            ZIIII.....
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
            Z.........
            ZIIII.....
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
        setupFallingShape(board, Tetromino.I_SHAPE.rotateLeft(), 0, 6);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            ........IZ
            ........IZ
            ........IZ
            ........IZ
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
            .........Z
            .....IIIIZ
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
            .........Z
            .........Z
            .....IIIIZ
            .........Z
            ..........
            ..........
            `
        );
    });
});
