import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.ts";
import { Tetromino } from "../src/Tetromino.ts";

describe("Moving falling tetrominoes ", () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.Z_SHAPE);
    });

    test("tests have the correct setup", () => {
        expect(board.toString()).to.equalShape(
            `...ZZ.....
             ....ZZ....
             ..........
             ..........
             ..........
             ..........`
        );
    });

    test("can be moved left", async () => {
        board.moveLeft()
        expect(board.toString()).to.equalShape(
          `..ZZ......
           ...ZZ.....
           ..........
           ..........
           ..........
           ..........`
        )
    });

    test("can be moved right", async () => {
        board.moveRight()
        expect(board.toString()).to.equalShape(
          `....ZZ....
           .....ZZ...
           ..........
           ..........
           ..........
           ..........`
        )
    });

    test("can be moved down", async () => {
        board.moveDown()
        expect(board.toString()).to.equalShape(
          `..........
           ...ZZ.....
           ....ZZ....
           ..........
           ..........
           ..........`
        )
    });

    test('cannot be moved left when on the left edge of the board', () => {
      const edgeZ =
        `
        ZZ........
        .ZZ.......
        ..........
        ..........
        ..........
        ..........
        `
      
      board.moveLeft()
      board.moveLeft()
      board.moveLeft()

      expect(board.toString()).to.equalShape(edgeZ)

      board.moveLeft()

      expect(board.toString()).to.equalShape(edgeZ)
    })

    test('cannot be moved right when on the right edge of the board', () => {
      const edgeZ =
        `
        ........ZZ
        .......ZZ.
        ..........
        ..........
        ..........
        ..........
        `
      
      board.moveRight()
      board.moveRight()
      board.moveRight()

      expect(board.toString()).to.equalShape(edgeZ)

      board.moveRight()

      expect(board.toString()).to.equalShape(edgeZ)
    })
});
