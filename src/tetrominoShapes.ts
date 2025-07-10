import { rotateClockwise } from "./Shape"

const rotateNTimes = (matrix: Array<Array<string>>, n: number): Array<Array<string>> => {
    let rotated = matrix;
    for (let i = 0; i < n; i++) {
        rotated = rotateClockwise(rotated);
    }
    return rotated;
};

const createOrientations = (matrix: Array<Array<string>>, orientations: number): Array<Array<Array<string>>> => {
    let orientationArray: Array<Array<Array<string>>> = []
    for (let i = 0; i<orientations; i++) {
        orientationArray.push(rotateNTimes(matrix, i))
    }
    return orientationArray
}


export const TETROMINO_T_SHAPE = [
    ['.','T','.'],
    ['T','T','T'],
    ['.','.','.'],
]

export const TETROMINO_T = createOrientations(TETROMINO_T_SHAPE, 4) 

export const TETROMINO_S_SHAPE = [
    ['.','S','S'],
    ['S','S','.'],
    ['.','.','.'],
]

export const TETROMINO_S = createOrientations(TETROMINO_S_SHAPE, 4) 

export const TETROMINO_Z_SHAPE = [
    ['Z','Z','.'],
    ['.','Z','Z'],
    ['.','.','.'],
]

export const TETROMINO_Z = createOrientations(TETROMINO_Z_SHAPE, 4) 

export const TETROMINO_L_SHAPE = [
    ['.','.','L'],
    ['L','L','L'],
    ['.','.','.'],
]

export const TETROMINO_L = createOrientations(TETROMINO_L_SHAPE, 4) 

export const TETROMINO_J_SHAPE = [
    ['.','.','J'],
    ['J','J','J'],
    ['.','.','.'],
]

export const TETROMINO_J = createOrientations(TETROMINO_J_SHAPE, 4) 

export const TETROMINO_I_SHAPE = [
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
    ['I','I','I','I','.'],
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
]

export const TETROMINO_I = createOrientations(TETROMINO_I_SHAPE, 2) 

export const TETROMINO_O_SHAPE = [
    ['.','O','O'],
    ['.','O','O'],
    ['.','.','.'],
]