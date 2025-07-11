import { Cells } from "./Board";


export const moveAllFallingCellsLeft = (cells: Cells) => {
    const height = cells.length;
    const width = cells[0].length;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (cells[row][col] === "f") {
                cells[row][col - 1] = "f";
                cells[row][col] = ".";
            }
        }
    }
    return cells;
};export const moveAllFallingCellsRight = (cells: Cells) => {
    const height = cells.length;
    const lastCol = cells[0].length - 1;

    for (let row = 0; row < height; row++) {
        for (let col = lastCol; col >= 0; col--) {
            if (cells[row][col] === "f") {
                cells[row][col + 1] = "f";
                cells[row][col] = ".";
            }
        }
    }
    return cells;
};
export const moveAllFallingCellsDown = (cells: Cells) => {
    const lastRow = cells.length - 1;
    const width = cells[0].length;
    for (let row = lastRow; row >= 0; row--) {
        for (let col = 0; col < width; col++) {
            if (cells[row][col] === "f") {
                cells[row + 1][col] = "f";
                cells[row][col] = ".";
            }
        }
    }
    return cells;
};

