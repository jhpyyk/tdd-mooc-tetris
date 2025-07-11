const shapeChars = ["X", "Y", "I", "O", "T", "S", "Z", "L", "J", "."] as const;
export type ShapeChar = (typeof shapeChars)[number];

export type ShapeCells = Array<Array<ShapeChar>>;

export interface Shape {
    shapeChar: ShapeChar;

    cells: ShapeCells;

    toString: () => string;

    rotateRight: () => Shape;

    rotateLeft: () => Shape;
}

export const reverseRows = (matrix: ShapeCells): ShapeCells => {
    return matrix.map((row) => row.reverse());
};
export const transpose = (matrix: ShapeCells): ShapeCells => {
    return matrix[0].map((_col, i) => matrix.map((row) => row[i]));
};

export const rotateClockwise = (matrix: ShapeCells): ShapeCells => {
    const transposedCells = transpose(matrix);
    const reversedCells = reverseRows(transposedCells);
    return reversedCells;
};

export const rotateCounterClockwise = (matrix: ShapeCells): ShapeCells => {
    const reversedCells = reverseRows(matrix);
    const transposedCells = transpose(reversedCells);
    return transposedCells;
};

export const isShapeChar = (str: string): str is ShapeChar => {
    return shapeChars.includes(str as ShapeChar);
};
