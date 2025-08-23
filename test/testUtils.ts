import { Board } from "../src/Board"

export const moveLeftNTimes = (board: Board, n: number) => {
    for (let i=0; i<n; i++) {
        board.moveLeft()
    }
}

export const moveRightNTimes = (board: Board, n: number) => {
    for (let i=0; i<n; i++) {
        board.moveRight()
    }
}

export const moveDownNTimes = (board: Board, n: number) => {
    for (let i=0; i<n; i++) {
        board.moveDown()
    }
}

export const rotateLeftNTimes = (board: Board, n: number) => {
    for (let i=0; i<n; i++) {
        board.rotateLeft()
    }
}