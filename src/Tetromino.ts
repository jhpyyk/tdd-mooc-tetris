import Shape, { reverseRows, transpose } from "./Shape";

class Tetromino implements Shape {
    cells: Array<Array<string>>;
    constructor(cells: Array<Array<string>>) {
        this.cells = cells
    }
    toString = () => {
        let shapeString = "";
        for (const row of this.cells) {
            let rowString = "";
            for (const rowCell of row) {
            rowString = rowString.concat(rowCell)
            }
            rowString = rowString.concat("\n");
            shapeString = shapeString.concat(rowString);
        }
        return shapeString;
    }

    rotateRight = () => {
        const transposedCells = transpose(this.cells)
        const reversedCells = reverseRows(transposedCells)
        return new Tetromino(reversedCells)
    }

    rotateLeft = () => {
        const reversedCells = reverseRows(this.cells)
        const transposedCells = transpose(reversedCells)
        return new Tetromino(transposedCells)
    }
}

export default Tetromino