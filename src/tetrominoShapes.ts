import { rotateClockwise, ShapeCells } from "./Shape";

const rotateNTimes = (matrix: ShapeCells, n: number): ShapeCells => {
    let rotated = matrix;
    for (let i = 0; i < n; i++) {
        rotated = rotateClockwise(rotated);
    }
    return rotated;
};

const createOrientations = (matrix: ShapeCells, orientations: number): Array<ShapeCells> => {
    let orientationArray: Array<ShapeCells> = [];
    for (let i = 0; i < orientations; i++) {
        orientationArray.push(rotateNTimes(matrix, i));
    }
    return orientationArray;
};

export const ARIKA_T: Array<ShapeCells> = [
    [
        [".", ".", ".", "."],
        ["T", "T", "T", "."],
        [".", "T", ".", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", "T", ".", "."],
        ["T", "T", ".", "."],
        [".", "T", ".", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", ".", ".", "."],
        [".", "T", ".", "."],
        ["T", "T", "T", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", "T", ".", "."],
        [".", "T", "T", "."],
        [".", "T", ".", "."],
        [".", ".", ".", "."],
    ],
];

export const ARIKA_S: Array<ShapeCells> = [
    [
        [".", ".", ".", "."],
        [".", "S", "S", "."],
        ["S", "S", ".", "."],
        [".", ".", ".", "."],
    ],
    [
        ["S", ".", ".", "."],
        ["S", "S", ".", "."],
        [".", "S", ".", "."],
        [".", ".", ".", "."],
    ],
];

export const ARIKA_Z: Array<ShapeCells> = [
    [
        [".", ".", ".", "."],
        ["Z", "Z", ".", "."],
        [".", "Z", "Z", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", ".", "Z", "."],
        [".", "Z", "Z", "."],
        [".", "Z", ".", "."],
        [".", ".", ".", "."],
    ],
];

export const ARIKA_L: Array<ShapeCells> = [
    [
        [".", ".", ".", "."],
        ["L", "L", "L", "."],
        ["L", ".", ".", "."],
        [".", ".", ".", "."],
    ],
    [
        ["L", "L", ".", "."],
        [".", "L", ".", "."],
        [".", "L", ".", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", ".", ".", "."],
        [".", ".", "L", "."],
        ["L", "L", "L", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", "L", ".", "."],
        [".", "L", ".", "."],
        [".", "L", "L", "."],
        [".", ".", ".", "."],
    ],
];

export const ARIKA_J: Array<ShapeCells> = [
    [
        [".", ".", ".", "."],
        ["J", "J", "J", "."],
        [".", ".", "J", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", "J", ".", "."],
        [".", "J", ".", "."],
        ["J", "J", ".", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", ".", ".", "."],
        ["J", ".", ".", "."],
        ["J", "J", "J", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", "J", "J", "."],
        [".", "J", ".", "."],
        [".", "J", ".", "."],
        [".", ".", ".", "."],
    ],
];

export const ARIKA_I: Array<ShapeCells> = [
    [
        [".", ".", ".", "."],
        ["I", "I", "I", "I"],
        [".", ".", ".", "."],
        [".", ".", ".", "."],
    ],
    [
        [".", ".", "I", "."],
        [".", ".", "I", "."],
        [".", ".", "I", "."],
        [".", ".", "I", "."],
    ],
];

export const ARIKA_O: Array<ShapeCells> = [
    [
        [".", ".", ".", "."],
        [".", "O", "O", "."],
        [".", "O", "O", "."],
        [".", ".", ".", "."],
    ],
];
