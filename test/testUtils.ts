import { Board } from "../src/Board";
import { Shape } from "../src/Shape";
import { Tetromino } from "../src/Tetromino";

export const moveLeftNTimes = (board: Board, n: number) => {
    for (let i = 0; i < n; i++) {
        board.moveLeft();
    }
};

export const moveRightNTimes = (board: Board, n: number) => {
    for (let i = 0; i < n; i++) {
        board.moveRight();
    }
};

export const moveDownNTimes = (board: Board, n: number) => {
    for (let i = 0; i < n; i++) {
        board.moveDown();
    }
};

export const rotateLeftNTimes = (board: Board, n: number) => {
    for (let i = 0; i < n; i++) {
        board.rotateLeft();
    }
};

export const rotateRightNTimes = (board: Board, n: number) => {
    for (let i = 0; i < n; i++) {
        board.rotateRight();
    }
};

export const setupFallingShape = (board: Board, shape: Shape, row: number, col: number) => {
    board.fallingShape = shape;
    board.fallingPosRow = row + board.hiddenLayers;
    board.fallingPosCol = col;
    return board;
};
