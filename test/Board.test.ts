import { describe, test } from "vitest";
import { createBoardCells } from "../src/Board";
import { expect } from "chai";

describe("Board util function", () => {
    test("createBoardCells creates an empty board", () => {
        const boardCells = createBoardCells(3,3)
        expect(boardCells).to.eql([['.',',',','],['.',',',','],['.',',',',']])
    })
})