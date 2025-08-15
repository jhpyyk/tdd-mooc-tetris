import { OneByOneBlock } from "./OneByOneBlock";
import { Shape, ShapeChar } from "./Shape";

type CellState = ShapeChar;
type Row = Array<CellState>;
export type Cells = Array<Row>;

export class Board {
    width: number;
    height: number;
    cells: Cells;
    fallingShape: Shape | undefined;
    fallingPosRow: number | undefined;
    fallingPosCol: number | undefined;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.cells = createBoardCells(height, width);
    }

    static fromString = (str: string): Board => {
        const trimmed = str.trim()
        const rows = trimmed.split("\n");
        let resultRows: Cells = [];
        for (const row of rows) {
            let trimmedRow = row.trim().split("");
            resultRows = resultRows.concat([trimmedRow as Row]);
        }
        let board = new Board(resultRows[0].length, resultRows.length);
        board.cells = resultRows
        return board
    }

    toString() {
        let boardString = "";
        for (const row of this.cells) {
            let rowString = "";
            for (const rowCell of row) {
                rowString = rowString.concat(rowCell);
            }
            rowString = rowString.concat("\n");
            boardString = boardString.concat(rowString);
        }
        return boardString;
    }

    drop = (element: ShapeChar | Shape) => {
        if (this.hasFalling()) {
            throw new Error("already falling");
        }
        if (typeof element === "string") {
            this.fallingShape = getShapeByChar(element);
        } else {
            this.fallingShape = element;
        }
        
        const columnIndex = Math.floor((this.width - this.fallingShape.cells.length) / 2);
        this.fallingPosRow = 0
        this.fallingPosCol = columnIndex
        this.cells = insertFallingCharsIntoBoardCells(this.cells, this.fallingShape, this.fallingPosRow, this.fallingPosCol);
    };

    tick = () => {
        this.moveDown()
    };

    hasFalling = () => {
        if (!this.fallingShape) {
            return false 
        }
        return true
    };

    moveLeft = () => {
        this.moveShape(0, -1)
    }

    moveRight = () => {
       this.moveShape(0, 1)
    }

    moveDown = () => {
        const successful = this.moveShape(1, 0)
        if (!successful) {
            this.lockShape()
        }
    }

    rotateLeft = () => {
        if (!this.fallingShape || this.fallingPosRow === undefined || this.fallingPosCol === undefined) {
            return false
        }
        this.cells = eraseFallingShape(this.cells, this.fallingShape, this.fallingPosRow, this.fallingPosCol)
        this.fallingShape = this.fallingShape.rotateLeft()
        this.cells = insertFallingCharsIntoBoardCells(this.cells, this.fallingShape, this.fallingPosRow, this.fallingPosCol)
    }

    rotateRight = () => {
        if (!this.fallingShape || this.fallingPosRow === undefined || this.fallingPosCol === undefined) {
            return false
        }
        this.cells = eraseFallingShape(this.cells, this.fallingShape, this.fallingPosRow, this.fallingPosCol)
        this.fallingShape = this.fallingShape.rotateRight()
        this.cells = insertFallingCharsIntoBoardCells(this.cells, this.fallingShape, this.fallingPosRow, this.fallingPosCol)
    }

    private moveShape = (moveRows: number, moveCols: number) => {
        if (!this.fallingShape || this.fallingPosRow === undefined || this.fallingPosCol === undefined) {
            return false
        }
        if (!isShapeAbleToMove(this.cells, this.fallingShape, this.fallingPosRow, this.fallingPosCol, moveRows, moveCols)) {
            return false
        }
        this.cells = eraseFallingShape(this.cells, this.fallingShape, this.fallingPosRow, this.fallingPosCol)
        this.fallingPosRow = this.fallingPosRow + moveRows
        this.fallingPosCol = this.fallingPosCol + moveCols
        this.cells = insertFallingCharsIntoBoardCells(this.cells, this.fallingShape, this.fallingPosRow, this.fallingPosCol)
        return true
    }

    private lockShape = () => {
        this.fallingShape = undefined
        this.fallingPosRow = undefined
        this.fallingPosCol = undefined
    }
}

const isShapeCellAbleToMove = (cells: Cells, shape: Shape, shapeRow:number, shapeCol: number, row: number, col: number, moveRows: number, moveCols: number) =>{
    if (isShapeCellEmpty(shape, shapeRow, shapeCol)) {
        return true
    }
    if (isShapeCellExists(shape, shapeRow + moveRows, shapeCol + moveCols) && !isShapeCellEmpty(shape, shapeRow + moveRows, shapeCol + moveCols)) {
        return true
    }
    if (isBoardCellEmpty(cells, row + shapeRow + moveRows, col + shapeCol + moveCols)) {
        return true
    }
    return false
}

const isShapeAbleToMove = (cells: Cells, shape: Shape, row: number, col: number, moveRows: number, moveCols: number) => {
    for (let shapeRow=0; shapeRow < shape.cells.length; shapeRow++) {
        for (let shapeCol=0; shapeCol < shape.cells[0].length; shapeCol++) {
            if (!isShapeCellAbleToMove(cells, shape, shapeRow, shapeCol, row, col, moveRows, moveCols)) {
                return false
            }
        } 
    } 
    return true;
}

const createEmptyRow = (width: number): Row => {
    let row: Row = [];
    for (let i = 0; i < width; i++) {
        row.push(".");
    }
    return row;
};

const createBoardCells = (rows: number, columns: number) => {
    let cells = [];
    for (let i = 0; i < rows; i++) {
        const row = createEmptyRow(columns);
        cells.push(row);
    }
    return cells;
};

const getShapeByChar = (char: ShapeChar): Shape => {
    if (char === "X") {
        return OneByOneBlock.BLOCK_X;
    } else if (char === "Y") {
        return OneByOneBlock.BLOCK_Y;
    } else {
        throw Error(`Cannot get shape from char ${char}`);
    }
};

const isShapeCellEmpty = (shape: Shape, row: number, col: number) => {
    return shape.cells[row] && shape.cells[row][col] && shape.cells[row][col] === '.'
}

const isShapeCellExists = (shape: Shape, row: number, col: number) => {
    return shape.cells[row] && shape.cells[row][col]
}

const isBoardCellEmpty = (boardCells: Cells, row: number, col: number) => {
    return boardCells[row] && boardCells[row][col] && boardCells[row][col] === '.'
}

const isBoardCellExists = (boardCells: Cells, row: number, col: number) => {
    return boardCells[row] && boardCells[row][col]
}

const eraseFallingShape = (boardCells: Cells, shape: Shape, row: number, column: number): Cells => {
    for (let rowIdx=0; rowIdx < shape.cells.length; rowIdx++) {
        for (let colIdx=0; colIdx < shape.cells[0].length; colIdx++) {
            if (!isShapeCellEmpty(shape, rowIdx, colIdx) && isBoardCellExists(boardCells, row + rowIdx, column + colIdx)) {
                boardCells[row + rowIdx][column + colIdx] = '.'
            }
        }
    }
    return boardCells;
}

const insertFallingCharsIntoBoardCells = (boardCells: Cells, shape: Shape, row: number, column: number): Cells => {
    for (let rowIdx=0; rowIdx < shape.cells.length; rowIdx++) {
        for (let colIdx=0; colIdx < shape.cells[0].length; colIdx++) {
            if (!isShapeCellEmpty(shape, rowIdx, colIdx) && isBoardCellEmpty(boardCells, row + rowIdx, column + colIdx)) {
                boardCells[row + rowIdx][column + colIdx] = shape.shapeChar
            }
        }
    }
    return boardCells;
};
