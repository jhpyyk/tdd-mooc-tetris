import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { expect } from "chai";
import { Tetromino } from "../src/Tetromino";
import { rotateLeftNTimes, rotateRightNTimes, setupFallingShape } from "./testUtils";

describe("Rotating falling tetrominoes T can rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.ARIKA_T);
        board.moveDown();
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            ..........
            ...TTT....
            ....T.....
            ..........
            ..........
            ..........
            `
        );
    });

    test("left in empty space", () => {
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            ....T.....
            ....TT....
            ....T.....
            ..........
            ..........
            ..........
            `
        );
        board.rotateLeft();
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
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            ....T.....
            ...TT.....
            ....T.....
            ..........
            ..........
            ..........
            `
        );
    });

    test("right in empty space", () => {
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            ....T.....
            ...TT.....
            ....T.....
            ..........
            ..........
            ..........
            `
        );
        board.rotateRight();
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
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            ....T.....
            ....TT....
            ....T.....
            ..........
            ..........
            ..........
            `
        );
    });
});

describe("Rotating falling tetrominoes I can rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.ARIKA_I);
        board.moveDown();
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            ..........
            ...IIII...
            ..........
            ..........
            ..........
            ..........
            `
        );
    });

    test("left in empty space", () => {
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            .....I....
            .....I....
            .....I....
            .....I....
            ..........
            ..........
            `
        );
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            ..........
            ...IIII...
            ..........
            ..........
            ..........
            ..........
            `
        );
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            .....I....
            .....I....
            .....I....
            .....I....
            ..........
            ..........
            `
        );
    });

    test("right in empty space", () => {
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            .....I....
            .....I....
            .....I....
            .....I....
            ..........
            ..........
            `
        );
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            ..........
            ...IIII...
            ..........
            ..........
            ..........
            ..........
            `
        );
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            .....I....
            .....I....
            .....I....
            .....I....
            ..........
            ..........
            `
        );
    });
});

describe("Rotating falling tetrominoes T can rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSSSSSSS
            SSSS.SSSSS
            SSS...SSSS
            SSS...SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board = setupFallingShape(board, Tetromino.ARIKA_T, 1, 3);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSS.SSSSS
            SSSTTTSSSS
            SSS.T.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("left in tight space", () => {
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSS.TTSSSS
            SSS.T.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSS.SSSSS
            SSS.T.SSSS
            SSSTTTSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSSTT.SSSS
            SSS.T.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("right in tight space", () => {
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSSTT.SSSS
            SSS.T.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSS.SSSSS
            SSS.T.SSSS
            SSSTTTSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSS.TTSSSS
            SSS.T.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });
});

describe("Rotating falling tetrominoes I can rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSSSSSSS
            SSSSS.SSSS
            SSS....SSS
            SSSSS.SSSS
            SSSSS.SSSS
            SSSSSSSSSS
            `
        );
        board = setupFallingShape(board, Tetromino.ARIKA_I, 1, 3);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSS.SSSS
            SSSIIIISSS
            SSSSS.SSSS
            SSSSS.SSSS
            SSSSSSSSSS
            `
        );
    });

    test("left in tight space", () => {
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSSISSSS
            SSS..I.SSS
            SSSSSISSSS
            SSSSSISSSS
            SSSSSSSSSS
            `
        );
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSS.SSSS
            SSSIIIISSS
            SSSSS.SSSS
            SSSSS.SSSS
            SSSSSSSSSS
            `
        );
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSSISSSS
            SSS..I.SSS
            SSSSSISSSS
            SSSSSISSSS
            SSSSSSSSSS
            `
        );
    });

    test("right in tight space", () => {
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSSISSSS
            SSS..I.SSS
            SSSSSISSSS
            SSSSSISSSS
            SSSSSSSSSS
            `
        );
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSS.SSSS
            SSSIIIISSS
            SSSSS.SSSS
            SSSSS.SSSS
            SSSSSSSSSS
            `
        );
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSSISSSS
            SSS..I.SSS
            SSSSSISSSS
            SSSSSISSSS
            SSSSSSSSSS
            `
        );
    });
});

describe("Rotating falling tetrominoes T can not rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSSSSSSS
            SSS...SSSS
            SSSS.SSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board = setupFallingShape(board, Tetromino.ARIKA_T, 0, 3);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSTTTSSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("left on a full board space", () => {
        rotateLeftNTimes(board, 10);
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSTTTSSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("right on a full board space", () => {
        rotateRightNTimes(board, 10);
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSTTTSSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });
});

describe("Rotating falling tetrominoes T can not rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSSSSSSS
            SSS..SSSSS
            SSS..SSSSS
            SSS..SSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board = setupFallingShape(board, Tetromino.ARIKA_T.rotateRight(), 1, 3);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSS.TSSSSS
            SSSTTSSSSS
            SSS.TSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("left in two wide column space", () => {
        rotateLeftNTimes(board, 10);
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSS.TSSSSS
            SSSTTSSSSS
            SSS.TSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("right in two wide column space", () => {
        rotateRightNTimes(board, 10);
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSS.TSSSSS
            SSSTTSSSSS
            SSS.TSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });
});

describe("Rotating falling tetrominoes I can not rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSSSSSSS
            SSSSSSSSSS
            SSS....SSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board = setupFallingShape(board, Tetromino.ARIKA_I, 1, 3);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSSSSSSS
            SSSIIIISSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("left on a full board space", () => {
        rotateLeftNTimes(board, 10);
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSSSSSSS
            SSSIIIISSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("right on a full board space", () => {
        rotateRightNTimes(board, 10);
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSSSSSSS
            SSSIIIISSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });
});

describe("Rotating falling tetrominoes T can not rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSSSSSSS
            SSS....SSS
            SSS....SSS
            SSS....SSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
        board = setupFallingShape(board, Tetromino.ARIKA_I, 1, 3);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSS....SSS
            SSSIIIISSS
            SSS....SSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("left in three tall row space", () => {
        rotateLeftNTimes(board, 10);
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSS....SSS
            SSSIIIISSS
            SSS....SSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("right in three tall row space", () => {
        rotateRightNTimes(board, 10);
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSS....SSS
            SSSIIIISSS
            SSS....SSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });
});
