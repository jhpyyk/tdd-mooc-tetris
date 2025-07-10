import { rotateCounterClockwise } from "./Shape"

const rotateNTimes = (matrix: Array<Array<string>>, n: number): Array<Array<string>> => {
    let rotated = matrix;
    for (let i = 0; i < n; i++) {
        rotated = rotateCounterClockwise(rotated);
    }
    return rotated;
};

const createOrientations = (matrix: Array<Array<string>>, orientations: number): Array<Array<Array<string>>> => {
    let orientationArray: Array<Array<Array<string>>> = []
    for (let i = 0; i<orientations; i++) {
        orientationArray = orientationArray.concat(rotateNTimes(matrix, i))
    }
    return orientationArray
}


export const TETROMINO_T_SHAPE = [
    ['.','T','.'],
    ['T','T','T'],
    ['.','.','.'],
]

export const TETROMINO_T = createOrientations(TETROMINO_T_SHAPE, 4) 

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