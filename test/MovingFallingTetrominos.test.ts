import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.ts";
import { Tetromino } from "../src/Tetromino.ts";
import { moveDownNTimes, moveLeftNTimes, moveRightNTimes } from "./testUtils.ts";

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
        .......ZZ.
        ........ZZ
        ..........
        ..........
        ..........
        ..........
        `
      
      board.moveRight()
      board.moveRight()
      board.moveRight()
      board.moveRight()

      expect(board.toString()).to.equalShape(edgeZ)

      board.moveRight()

      expect(board.toString()).to.equalShape(edgeZ)
    })

    test('cannot be moved down when on the bottom edge of the board and stops moving', () => {
      const edgeZ =
        `
        ..........
        ..........
        ..........
        ..........
        ...ZZ.....
        ....ZZ....
        `
      
      board.moveDown()
      board.moveDown()
      board.moveDown()
      board.moveDown()

      expect(board.toString()).to.equalShape(edgeZ)

      board.moveDown()

      expect(board.toString()).to.equalShape(edgeZ)

      board.moveDown()

      expect(board.toString()).to.equalShape(edgeZ)
    })
});

describe("Moving falling tetrominoes ", () => {
  let board: Board;

  beforeEach(() => {
    board = Board.fromString(
      `
      III....III
      I........I
      I........I
      I........I
      I........I
      IIIIIIIIII
      `
    )
    board.drop(Tetromino.S_SHAPE)
  })

  test('tests have the correct setup', () => {
    expect(board.toString()).to.equalShape(
      `
      III.SS.III
      I..SS....I
      I........I
      I........I
      I........I
      IIIIIIIIII
      `
    )
  })

  test('cannot move left through other blocks', () => {
    moveLeftNTimes(board, 10)

    const sBlockedByILeft =
      `
      IIISS..III
      I.SS.....I
      I........I
      I........I
      I........I
      IIIIIIIIII
      `

    expect(board.toString()).to.equalShape(sBlockedByILeft)
  })

  test('cannot move right through other blocks', () => {
    moveRightNTimes(board, 10)

    const sBlockedByIRight =
      `
      III..SSIII
      I...SS...I
      I........I
      I........I
      I........I
      IIIIIIIIII
      `

    expect(board.toString()).to.equalShape(sBlockedByIRight)
  })


  test('cannot move down through other blocks and stops falling', () => {
    moveDownNTimes(board, 10)

    const sBlockedByIDown =
      `
      III....III
      I........I
      I........I
      I...SS...I
      I..SS....I
      IIIIIIIIII
      `

    expect(board.toString()).to.equalShape(sBlockedByIDown)

    moveLeftNTimes(board, 3)

    expect(board.toString()).to.equalShape(sBlockedByIDown)

    moveRightNTimes(board, 3)

    expect(board.toString()).to.equalShape(sBlockedByIDown)
  })
})
