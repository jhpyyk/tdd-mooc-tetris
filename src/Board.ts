import { OneByOneBlock } from "./OneByOneBlock";
import { Arika, RotationSystem, SimpleWallKick } from "./RotationSystem";
import { Shape, ShapeChar } from "./Shape";

type CellState = ShapeChar;
type Row = Array<CellState>;
export type Cells = Array<Row>;
export type Position = {
    row: number;
    col: number;
};

export class Board {
    width: number;
    height: number;
    cells: Cells;
    fallingShape: Shape | undefined;
    shapePos: Position | undefined;
    hiddenLayers: number = 1;
    rotationSystem: RotationSystem = new Arika();

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height + this.hiddenLayers;
        this.cells = createBoardCells(this.height, this.width);
    }

    static fromString = (str: string): Board => {
        const trimmed = str.trim();
        const rows = trimmed.split("\n");
        let resultRows: Cells = [];
        for (const row of rows) {
            let trimmedRow = row.trim().split("");
            resultRows = resultRows.concat([trimmedRow as Row]);
        }
        let board = new Board(resultRows[0].length, resultRows.length);
        board.cells = board.cells.toSpliced(board.hiddenLayers, board.cells.length - board.hiddenLayers, ...resultRows);
        return board;
    };

    toString() {
        let cellsCopy = structuredClone(this.cells);
        if (this.fallingShape && this.shapePos) {
            cellsCopy = insertFallingCharsIntoBoardCells(cellsCopy, this.fallingShape, this.shapePos);
        }
        let boardString = "";
        for (const row of cellsCopy.toSpliced(0, this.hiddenLayers)) {
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
        this.shapePos = { row: 0 + this.hiddenLayers, col: columnIndex };

        if (this.fallingShape.cells[0].length === 4 && this.fallingShape.cells.length === 4) {
            // Arika shape
            this.shapePos = { row: this.hiddenLayers - 1, col: columnIndex };
        }
    };

    tick = () => {
        this.moveDown();
    };

    hasFalling = () => {
        if (!this.fallingShape) {
            return false;
        }
        return true;
    };

    moveLeft = () => {
        this.moveShape(0, -1);
    };

    moveRight = () => {
        this.moveShape(0, 1);
    };

    moveDown = () => {
        const successful = this.moveShape(1, 0);
        if (!successful) {
            this.lockShape();
        }
    };

    rotateLeft = () => {
        if (!this.fallingShape || !this.shapePos) {
            return;
        }
        const newAbsolutePos = this.rotationSystem.calculateNewAbsolutePosition(
            this.cells,
            this.fallingShape.rotateLeft(),
            this.shapePos
        );
        if (!newAbsolutePos) {
            return;
        }
        this.fallingShape = this.fallingShape.rotateLeft();
        this.shapePos = newAbsolutePos;
    };

    rotateRight = () => {
        if (!this.fallingShape || !this.shapePos) {
            return;
        }
        const newAbsolutePos = this.rotationSystem.calculateNewAbsolutePosition(
            this.cells,
            this.fallingShape.rotateRight(),
            this.shapePos
        );
        if (!newAbsolutePos) {
            return;
        }
        this.fallingShape = this.fallingShape.rotateRight();
        this.shapePos = newAbsolutePos;
    };

    private moveShape = (moveRows: number, moveCols: number) => {
        if (!this.fallingShape || !this.shapePos) {
            return false;
        }
        const newPos: Position = { row: this.shapePos.row + moveRows, col: this.shapePos.col + moveCols };
        if (!isShapeAbleToBeInsertedTo(this.cells, this.fallingShape, newPos)) {
            return false;
        }
        if (this.shapePos !== undefined) {
            this.shapePos = { row: this.shapePos.row + moveRows, col: this.shapePos.col + moveCols };
        }
        return true;
    };

    private lockShape = () => {
        if (!this.fallingShape || !this.shapePos) {
            return;
        }
        this.cells = insertFallingCharsIntoBoardCells(this.cells, this.fallingShape, this.shapePos);
        this.fallingShape = undefined;
        this.shapePos = undefined;
    };
}

const isShouldBeEmptyPositionsEmpty = (cells: Cells, shapePos: Position, positions: Position[]) => {
    for (const pos of positions) {
        if (!isBoardCellEmpty(cells, shapePos.row + pos.row, shapePos.col + pos.col)) {
            return false;
        }
    }
    return true;
};

const calculateFirstPossibleRotationAbsolutePosition = (
    cells: Cells,
    shape: Shape,
    shapePos: Position,
    positions: Position[]
): Position | undefined => {
    for (const pos of positions) {
        const absolutePosition: Position = { row: shapePos.row + pos.row, col: shapePos.col + pos.col };
        if (isShapeAbleToBeInsertedTo(cells, shape, absolutePosition)) {
            return absolutePosition;
        }
    }
    return undefined;
};

const isShapeCellAbleToBeInserted = (cells: Cells, shape: Shape, shapeRow: number, shapeCol: number, pos: Position) => {
    return (
        isShapeCellEmpty(shape, shapeRow, shapeCol) || isBoardCellEmpty(cells, pos.row + shapeRow, pos.col + shapeCol)
    );
};

const isShapeAbleToBeInsertedTo = (cells: Cells, shape: Shape, pos: Position) => {
    for (let shapeRow = 0; shapeRow < shape.cells.length; shapeRow++) {
        for (let shapeCol = 0; shapeCol < shape.cells[0].length; shapeCol++) {
            if (!isShapeCellAbleToBeInserted(cells, shape, shapeRow, shapeCol, pos)) {
                return false;
            }
        }
    }

    return true;
};

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
    return shape.cells[row] && shape.cells[row][col] && shape.cells[row][col] === ".";
};

const isBoardCellEmpty = (boardCells: Cells, row: number, col: number) => {
    return boardCells[row] && boardCells[row][col] && boardCells[row][col] === ".";
};

const insertFallingCharsIntoBoardCells = (boardCells: Cells, shape: Shape, pos: Position): Cells => {
    for (let rowIdx = 0; rowIdx < shape.cells.length; rowIdx++) {
        for (let colIdx = 0; colIdx < shape.cells[0].length; colIdx++) {
            if (!isShapeCellEmpty(shape, rowIdx, colIdx)) {
                boardCells[pos.row + rowIdx][pos.col + colIdx] = shape.shapeChar;
            }
        }
    }
    return boardCells;
};
