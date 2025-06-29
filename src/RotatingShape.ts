export class RotatingShape {
    cells: Array<Array<string>>;
    constructor(cells: Array<Array<string>>) {
        this.cells = cells
    }
    static fromString = (str: string) => {
        const rows = str.split('\n')
        let resultRows: Array<Array<string>> = []
        for (const row of rows) {
            let trimmedRow = row.trim().split('')
            resultRows = resultRows.concat([trimmedRow])
        }
        return new RotatingShape(resultRows)
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
        return new RotatingShape(reversedCells)
    }

    rotateLeft = () => {
        const reversedCells = reverseRows(this.cells)
        const transposedCells = transpose(reversedCells)
        return new RotatingShape(transposedCells)
    }
}


const reverseRows = (matrix: Array<Array<string>>): Array<Array<string>> => {
    return matrix.map(row => row.reverse())
}
const transpose = (matrix: Array<Array<string>>): Array<Array<string>> => {
  return matrix[0].map((_col, i) => matrix.map(row => row[i]));
}