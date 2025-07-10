export type ShapeCells = Array<Array<string>>

interface Shape {
    cells: ShapeCells

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

export const rotateClockwise = (matrix: Array<Array<string>>): Array<Array<string>> => {
    const transposedCells = transpose(matrix)
    const reversedCells = reverseRows(transposedCells)
    return reversedCells
}

export const rotateCounterClockwise = (matrix: Array<Array<string>>): Array<Array<string>> => {
    const reversedCells = reverseRows(matrix)
    const transposedCells = transpose(reversedCells)
    return transposedCells
}

