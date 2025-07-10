import { OneByOneBlock } from "./OneByOneBlock";
import Shape, { isShapeChar, ShapeChar } from "./Shape";
import { Tetromino } from "./Tetromino";

type CellState = "e" | "f" | ShapeChar;
type Row = Array<CellState>;
type Cells = Array<Row>;

export class Board {
  width;
  height;
  cells: Cells;
  fallingShape: Shape | undefined;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = createBoardCells(height, width);
  }

  toString() {
    let boardString = "";
    for (const row of this.cells) {
      let rowString = "";
      for (const rowCell of row) {
        const cellString = formatCellString(rowCell, this.fallingShape)
        rowString = rowString.concat(cellString)
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
    if (typeof element === 'string') {
      this.fallingShape = getShapeByChar(element)
    } else {
      this.fallingShape = element
    }

    const middleIndex = Math.floor(this.width / 2);
    this.cells = insertIntoBoardCells(this.cells, 0, middleIndex, "f");
  };

  tick = () => {
    if (!this.fallingShape) {
      console.log("no falling shape")
      return
    }

    const lastRow = this.height - 1;
    for (let row = lastRow; row >= 0; row--) {
      for (let col = 0; col < this.width; col++) {
        if (this.cells[row][col] === "f" && isFallingAbleToMoveDown(this.cells, row, col)) {
          this.cells[row+1][col] = "f"
          this.cells[row][col] = "e"
        } else if (this.cells[row][col] === "f" && !isFallingAbleToMoveDown(this.cells, row, col)) {
          this.cells = lockFallingCells(this.cells, this.fallingShape)
        }
      }
    }
  };

  hasFalling = () => {
    for (const row of this.cells) {
      for (const col of row) {
        if (col === "f") {
          return true
        }
      }
    }
    return false
  };
}

const isFallingAbleToMoveDown = (cells: Cells, row: number, col: number) => {
  return cells[row+1] && cells[row+1][col] === "e"
}

const formatCellString = (cell: CellState, fallingShape: Shape | undefined) => {
  if (cell === "e") {
    return '.'
  } else if (cell === "f") {
    if (!fallingShape) {
      throw Error("fallingShape is undefined")
    }
    return fallingShape.toString()
  }  else if (isShapeChar(cell)) {
    return cell
  }
  throw Error(`Cannot format cell value ${cell} to string`)
}

const createEmptyRow = (width: number): Row => {
  let row: Row = [];
  for (let i = 0; i < width; i++) {
    row.push("e");
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

const insertIntoBoardCells = (
  boardCells: Cells,
  row: number,
  column: number,
  elementToInsert: CellState
): Cells => {
  boardCells[row].splice(column, 1, elementToInsert);
  return boardCells;
};

const lockFallingCells = (cells: Cells, fallingShape: Shape): Cells => {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j] === "f") {
        cells[i][j] = fallingShape.toString() as ShapeChar;
      }
    }
  }
  return cells;
};

const getShapeByChar = (char: ShapeChar): Shape => {
  switch (char) {
    case "X":
      return OneByOneBlock.BLOCK_X
    case "Y":
      return OneByOneBlock.BLOCK_Y
    case "T":
      return Tetromino.T_SHAPE
  }
}


// const insertShapeIntoBoardCells = (boardCells: Cells, row: number, column: number, shape: Shape): Cells => {
//   for (const shapeRow of shape.cells) {
//     boardCells[row].splice(column, shapeRow.length, ...shapeRow as CellState)
//   }
// }