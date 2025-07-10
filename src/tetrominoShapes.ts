import { rotateCounterClockwise } from "./Shape"

export const rotateNTimes = (matrix: Array<Array<string>>, n: number): Array<Array<string>> => {
    let rotated = matrix;
    for (let i = 0; i < n; i++) {
        rotated = rotateCounterClockwise(rotated);
    }
    return rotated;
};


export const TETROMINO_T_SHAPE = [
    ['.','T','.'],
    ['T','T','T'],
    ['.','.','.'],
]

// export const TETROMINO_T = [rotateNTimes(TETROMINO_T_SHAPE, 0), rotateNTimes] 

export const TETROMINO_S = [
    ['.','S','S'],
    ['S','S','.'],
    ['.','.','.'],
]

export const TETROMINO_Z = [
    ['Z','Z','.'],
    ['.','Z','Z'],
    ['.','.','.'],
]

export const TETROMINO_L = [
    ['.','.','L'],
    ['L','L','L'],
    ['.','.','.'],
]

export const TETROMINO_J = [
    ['.','.','J'],
    ['J','J','J'],
    ['.','.','.'],
]

export const TETROMINO_I = [
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
    ['I','I','I','I','.'],
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
]

export const TETROMINO_O = [
    ['.','O','O'],
    ['.','O','O'],
    ['.','.','.'],
]