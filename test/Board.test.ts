import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.ts";
import { Tetromino } from "../src/Tetromino.ts";

describe('Board ', () => {
    test('can be created from string with all cells empty', () => {
        const emptySixByTen =
            `
            ..........
            ..........
            ..........
            ..........
            ..........
            ..........
            `
        const board = Board.fromString(emptySixByTen)

        expect(board.toString()).to.equalShape(emptySixByTen)
    })
})