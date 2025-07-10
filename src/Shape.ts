interface Shape {
    toString: () => string

    rotateRight: () => Shape

    rotateLeft: () => Shape
}

export default Shape;
export const reverseRows = (matrix: Array<Array<string>>): Array<Array<string>> => {
    return matrix.map(row => row.reverse());
};
export const transpose = (matrix: Array<Array<string>>): Array<Array<string>> => {
    return matrix[0].map((_col, i) => matrix.map(row => row[i]));
};

export const TETROMINO_SHAPE = {
    T_SHAPE: [
        ['.','T','.'],
        ['T','T','T'],
        ['.','.','.'],
    ]
} as const