import { describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.ts";

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

    test('can be created with arbitrary cells', () => {
        const arbitrary =
            `
            Z....
            Z..S.
            .....
            .T.I.
            ...Z.
            `

        const board = Board.fromString(arbitrary)

        expect(board.toString()).to.equalShape(arbitrary)

    })
})