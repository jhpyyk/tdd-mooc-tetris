import { describe, test } from "vitest";
import { Board, createBoardCells, insertIntoBoardCells } from "../src/Board";
import { expect } from "chai";

describe("Board util function", () => {
    const emptyBoardCells = [
        ['.','.','.'],
        ['.','.','.'],
        ['.','.','.']
    ]
    test("createBoardCells creates an empty board", () => {
        const boardCells = createBoardCells(3,3)
        expect(boardCells).to.eql(emptyBoardCells)
    })

    test("insertIntoBoard inserts an element in given coordinates", () => {
        const board = new Board(3,3)
        const boardCellsWithXInTwoOne = [
            ['.','.','.'],
            ['.','.','.'],
            ['.','X','.']
        ]
        const resultBoardCells = insertIntoBoardCells(board.cells, 2, 1, 'X')
        expect(resultBoardCells).to.eql(boardCellsWithXInTwoOne)
    })
})