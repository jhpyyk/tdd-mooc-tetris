import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { setupFallingShape } from "./testUtils";
import { expect } from "chai";

describe("I_SHAPE cannot left wall kick ", () => {
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
        .I........
        .I........
        .I........
        .I........
        ..........
        ..........
        `
        );
    });

    test("when rotating right", () => {
        board.rotateRight();

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
});

describe("I cannot right wall kick ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        setupFallingShape(board, Tetromino.ARIKA_I.rotateLeft(), 0, board.cells[0].length - 3);
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
        .........I
        .........I
        .........I
        .........I
        ..........
        ..........
        `
        );
    });

    test("rotating right when facing right wall", () => {
        board.rotateRight();

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
});

describe("I cannot left wall kick from other pieces ", () => {
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
        setupFallingShape(board, Tetromino.ARIKA_I.rotateRight(), 0, 0);
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
        Z.I.......
        Z.I.......
        Z.I.......
        Z.I.......
        ..........
        ..........
        `
        );
    });

    test("when rotating right", () => {
        board.rotateRight();

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
});

describe("T cannot wall kick from other pieces ", () => {
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
        setupFallingShape(board, Tetromino.ARIKA_I.rotateLeft(), 0, 6);
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
            ........IZ
            ........IZ
            ........IZ
            ........IZ
            ..........
            ..........
            `
        );
    });

    test("when rotating right", () => {
        board.rotateRight();

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
});
