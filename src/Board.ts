const shapes = ["X", "Y"] as const;
type Shape = (typeof shapes)[number];
type CellState = "empty" | "falling" | Shape;
type Row = Array<CellState>;
type Cells = Array<Row>;

export class Board {
  width;
  height;
  cells: Cells;
  fallingShape: Shape;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = createBoardCells(height, width);
    this.fallingShape = 'X';
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

  drop = (element: Shape) => {
    if (this.hasFalling()) {
      throw new Error("already falling");
    }
    const middleIndex = Math.floor(this.width / 2);
    this.fallingShape = element;
    this.cells = insertIntoBoardCells(this.cells, 0, middleIndex, "falling");
  };

  tick = () => {
    if (!this.fallingShape) {
      console.log("no falling shape")
      return
    }

    const lastRow = this.height - 1;
    for (let row = lastRow; row >= 0; row--) {
      for (let col = 0; col < this.width; col++) {
        if (this.cells[row][col] === "falling" && isFallingAbleToMoveDown(this.cells, row, col)) {
          this.cells[row+1][col] = "falling"
          this.cells[row][col] = "empty"
        } else if (this.cells[row][col] === "falling" && !isFallingAbleToMoveDown(this.cells, row, col)) {
          this.cells = lockFallingCells(this.cells, this.fallingShape)
        }
      }
    }
  };

  hasFalling = () => {
    for (const row of this.cells) {
      for (const col of row) {
        if (col === "falling") {
          return true
        }
      }
    }
    return false
  };
}

const isFallingAbleToMoveDown = (cells: Cells, row: number, col: number) => {
  return cells[row+1] && cells[row+1][col] === "empty"
}

const formatCellString = (cell: CellState, fallingShape: Shape) => {
  if (cell === "empty") {
    return '.'
  } else if (cell === "falling") {
    return fallingShape
  }  else if (isShape(cell)) {
    return cell
  }
  throw Error(`Cannot format cell value ${cell} to string`)
}

const createEmptyRow = (width: number): Row => {
  let row: Row = [];
  for (let i = 0; i < width; i++) {
    row.push("empty");
  }
  return row;
};

export const createBoardCells = (rows: number, columns: number) => {
  let cells = [];
  for (let i = 0; i < rows; i++) {
    const row = createEmptyRow(columns);
    cells.push(row);
  }
  return cells;
};

export const insertIntoBoardCells = (
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
      if (cells[i][j] === "falling") {
        cells[i][j] = fallingShape;
      }
    }
  }
  return cells;
};

const isShape = (str: string): str is Shape => {
  return shapes.includes(str as Shape);
};
