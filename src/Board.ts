import { OneByOneBlock } from "./OneByOneBlock";
import { Shape,isShapeChar, ShapeChar } from "./Shape";
import { Tetromino } from "./Tetromino";

type CellState = "f" | ShapeChar;
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

    const columnIndex = Math.floor((this.width - this.fallingShape.cells.length) / 2 )
    this.cells = insertFallingCharsIntoBoardCells(this.cells, 0, columnIndex, this.fallingShape);
  };

  tick = () => {
    if (!this.fallingShape) {
      console.log("no falling shape")
      return
    }
    
    if (!isAllFallingCellsAbleToMoveDown(this.cells)) {
      this.cells = lockFallingCells(this.cells, this.fallingShape)
    } else {
      this.cells = moveAllFallingCellsDown(this.cells)
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
  return cells[row+1] && ['.', 'f'].includes(cells[row+1][col])
}

const isAllFallingCellsAbleToMoveDown = (cells: Cells): boolean => {
  const lastRow = cells.length - 1;
  const width = cells[0].length
    for (let row = lastRow; row >= 0; row--) {
      for (let col = 0; col < width; col++) {
        if (cells[row][col] === "f" && !isFallingAbleToMoveDown(cells, row, col)) {
          return false
        }
      }
    }
    return true
}

const moveAllFallingCellsDown = (cells: Cells) => {
  const lastRow = cells.length - 1;
  const width = cells[0].length
    for (let row = lastRow; row >= 0; row--) {
      for (let col = 0; col < width; col++) {
        if (cells[row][col] === "f") {
          cells[row+1][col] = "f"
          cells[row][col] = "."
        }
      }
    }
  return cells
}

const formatCellString = (cell: CellState, fallingShape: Shape | undefined) => {
  if (cell === ".") {
    return '.'
  } else if (cell === "f") {
    if (!fallingShape) {
      throw Error("fallingShape is undefined")
    }
    return fallingShape.shapeChar
  }  else if (isShapeChar(cell)) {
    return cell
  }
  throw Error(`Cannot format cell value ${cell} to string`)
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
        cells[i][j] = fallingShape.shapeChar
      }
    }
  }
  return cells;
};

const getShapeByChar = (char: ShapeChar): Shape => {
  if (char === "X") {
    return OneByOneBlock.BLOCK_X
  } else if (char === "Y") {
    return OneByOneBlock.BLOCK_Y
  } else {
    throw Error(`Cannot get shape from char ${char}`)
  }
}

const getShapeCharFromShape = (shape: Shape) => {

}


const insertFallingCharsIntoBoardCells = (boardCells: Cells, row: number, column: number, shape: Shape): Cells => {
  const shapeWithF = shape.cells.map(row => {
    return row.map(cell => {
      if (cell !== '.') {
        return 'f'
      } else {
        return cell
      }
    })
  })
  shapeWithF.forEach((shapeRow, index) => {
    boardCells[row + index].splice(column, shapeRow.length, ...shapeRow)
  })
  return boardCells
}