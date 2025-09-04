import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";
import { setupFallingShape } from "./testUtils";
import { expect } from "chai";

describe("Arika rotation ", () => {
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
            setupFallingShape(board, Tetromino.ARIKA_T.rotateLeft(), 0, 0);
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
        Z.........
        Z.T.......
        ZTTT......
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
            setupFallingShape(board, Tetromino.ARIKA_T.rotateRight(), 0, 7);
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
        .........Z
        .......T.Z
        ......TTTZ
        .........Z
        ..........
        ..........
        `
            );
        });
    });

    describe("T respects the center column rule and ", () => {
        describe("will not rotate when shape position (0,1) is occupied ", () => {
            let board: Board;

            beforeEach(() => {
                board = Board.fromString(
                    `
                    ....Z.....
                    ..........
                    ..........
                    ..........
                    ..........
                    ..........
                    `
                );
            });

            test("when T is in initial rotation and rotating left", () => {
                board = setupFallingShape(board, Tetromino.ARIKA_T, 0, 3);

                const expected = `
                ....Z.....
                ...TTT....
                ....T.....
                ..........
                ..........
                ..........
                `;

                expect(board.toString()).to.equalShape(expected);

                board.rotateLeft();
                board.rotateLeft();

                expect(board.toString()).to.equalShape(expected);
            });

            test("when T is in initial rotation and rotating right", () => {
                board = setupFallingShape(board, Tetromino.ARIKA_T, 0, 3);

                const expected = `
                ....Z.....
                ...TTT....
                ....T.....
                ..........
                ..........
                ..........
                `;

                expect(board.toString()).to.equalShape(expected);

                board.rotateRight();
                board.rotateRight();

                expect(board.toString()).to.equalShape(expected);
            });
        });
    });
});
