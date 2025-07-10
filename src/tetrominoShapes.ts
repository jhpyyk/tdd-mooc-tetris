import { rotateClockwise, ShapeCells } from "./Shape"

const rotateNTimes = (matrix: ShapeCells, n: number): ShapeCells => {
    let rotated = matrix;
    for (let i = 0; i < n; i++) {
        rotated = rotateClockwise(rotated);
    }
    return rotated;
};

const createOrientations = (matrix: ShapeCells, orientations: number): Array<ShapeCells> => {
    let orientationArray: Array<ShapeCells> = []
    for (let i = 0; i<orientations; i++) {
        orientationArray.push(rotateNTimes(matrix, i))
    }
    return orientationArray
}


export const TETROMINO_T_SHAPE: ShapeCells = [
    ['.','T','.'],
    ['T','T','T'],
    ['.','.','.'],
]

export const TETROMINO_T = createOrientations(TETROMINO_T_SHAPE, 4) 

export const TETROMINO_S_SHAPE: ShapeCells  = [
    ['.','S','S'],
    ['S','S','.'],
    ['.','.','.'],
]

export const TETROMINO_S = createOrientations(TETROMINO_S_SHAPE, 4) 

export const TETROMINO_Z_SHAPE: ShapeCells  = [
    ['Z','Z','.'],
    ['.','Z','Z'],
    ['.','.','.'],
]

export const TETROMINO_Z = createOrientations(TETROMINO_Z_SHAPE, 4) 

export const TETROMINO_L_SHAPE: ShapeCells  = [
    ['.','.','L'],
    ['L','L','L'],
    ['.','.','.'],
]

export const TETROMINO_L = createOrientations(TETROMINO_L_SHAPE, 4) 

export const TETROMINO_J_SHAPE: ShapeCells  = [
    ['.','.','J'],
    ['J','J','J'],
    ['.','.','.'],
]

export const TETROMINO_J = createOrientations(TETROMINO_J_SHAPE, 4) 

export const TETROMINO_I_SHAPE: ShapeCells  = [
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
    ['I','I','I','I','.'],
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
]

export const TETROMINO_I = createOrientations(TETROMINO_I_SHAPE, 2) 

export const TETROMINO_O_SHAPE: ShapeCells  = [
    ['.','O','O'],
    ['.','O','O'],
    ['.','.','.'],
]

export const TETROMINO_O = createOrientations(TETROMINO_O_SHAPE, 1) 