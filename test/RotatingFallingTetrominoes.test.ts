import { beforeEach, describe, test } from "vitest";
import { Board } from "../src/Board";
import { expect } from "chai";
import { Tetromino } from "../src/Tetromino";
import { rotateLeftNTimes } from "./testUtils";

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
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            ..........
            ..........
            ...TTT....
            ....T.....
            ..........
            ..........
            `
        )
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            ..........
            ....T.....
            ....TT....
            ....T.....
            ..........
            ..........
            `
        )
    })

    test("right in empty space", () => {
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            ..........
            ....T.....
            ....TT....
            ....T.....
            ..........
            ..........
            `
        )
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            ..........
            ..........
            ...TTT....
            ....T.....
            ..........
            ..........
            `
        )
        board.rotateRight()
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

describe("Rotating falling tetrominoes I can rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6)
        board.drop(Tetromino.I_SHAPE)
        board.moveDown()
        board.moveDown()
    })

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            ..........
            ..........
            ...IIII...
            ..........
            ..........
            ..........
            `
        );
    });

    test("left in empty space", () => {
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            .....I....
            .....I....
            .....I....
            .....I....
            ..........
            ..........
            `
        )
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            ..........
            ..........
            ...IIII...
            ..........
            ..........
            ..........
            `
        )
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            .....I....
            .....I....
            .....I....
            .....I....
            ..........
            ..........
            `
        )
    })

    test("right in empty space", () => {
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            .....I....
            .....I....
            .....I....
            .....I....
            ..........
            ..........
            `
        )
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            ..........
            ..........
            ...IIII...
            ..........
            ..........
            ..........
            `
        )
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            .....I....
            .....I....
            .....I....
            .....I....
            ..........
            ..........
            `
        )
    })
})

describe("Rotating falling tetrominoes T can rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSSSSSSS
            SSSS.SSSSS
            SSS...SSSS
            SSSS.SSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.fallingShape = Tetromino.T_SHAPE
        board.fallingPosRow = 1 + board.hiddenLayers
        board.fallingPosCol = 3
    })

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSSTTTSSSS
            SSSS.SSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("left in tight space", () => {
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSSTT.SSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSS.SSSSS
            SSSTTTSSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSS.TTSSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
    })

    test("right in tght space", () => {
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSS.TTSSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSS.SSSSS
            SSSTTTSSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSSTT.SSSS
            SSSSTSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
    })
})

describe("Rotating falling tetrominoes I can rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSS.SSSS
            SSSSS.SSSS
            SSS....SSS
            SSSSS.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.fallingShape = Tetromino.I_SHAPE
        board.fallingPosRow = 0 + board.hiddenLayers
        board.fallingPosCol = 3
    })

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSS.SSSS
            SSSSS.SSSS
            SSSIIIISSS
            SSSSS.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("left in tight space", () => {
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            SSSSSISSSS
            SSSSSISSSS
            SSS..I.SSS
            SSSSSISSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            SSSSS.SSSS
            SSSSS.SSSS
            SSSIIIISSS
            SSSSS.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.rotateLeft()
        expect(board.toString()).to.equalShape(
            `
            SSSSSISSSS
            SSSSSISSSS
            SSS..I.SSS
            SSSSSISSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
    })

    test("right in tght space", () => {
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            SSSSSISSSS
            SSSSSISSSS
            SSS..I.SSS
            SSSSSISSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            SSSSS.SSSS
            SSSSS.SSSS
            SSSIIIISSS
            SSSSS.SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.rotateRight()
        expect(board.toString()).to.equalShape(
            `
            SSSSSISSSS
            SSSSSISSSS
            SSS..I.SSS
            SSSSSISSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
    })
})


describe("Rotating falling tetrominoes T can not rotate ", () => {
    let board: Board;

    beforeEach(() => {
        board = Board.fromString(
            `
            SSSSSSSSSS
            SSSS.SSSSS
            SSS...SSSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
        board.fallingShape = Tetromino.T_SHAPE
        board.fallingPosRow = 1 + board.hiddenLayers
        board.fallingPosCol = 3
    })

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSSTTTSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        );
    });

    test("left in tight space", () => {
        rotateLeftNTimes(board, 10)
        expect(board.toString()).to.equalShape(
            `
            SSSSSSSSSS
            SSSSTSSSSS
            SSSTTTSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            SSSSSSSSSS
            `
        )
    })
})

