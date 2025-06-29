type Shape = "X" | "Y"
type BlockState = "empty" | "falling" | Shape
type Row = Array<BlockState>
type Cells = Array<Row>

export class Board {
  width;
  height;
  cells: Cells;
  fallingShape: Shape | null;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = createBoardCells(height, width)
    this.fallingShape = null
  }

  toString() {
    let boardString = ''
    for (const row of this.cells) {
      let rowString = ''
      for (const rowCell of row) {
        if (rowCell === 'empty') {
        rowString = rowString.concat('.')
      } else if(rowCell === "falling" && this.fallingShape) {
        rowString = rowString.concat(this.fallingShape)
      }
      }
      rowString = rowString.concat('\n')
      boardString = boardString.concat(rowString)
    }
    return boardString
  }

  drop = (element: Shape) => {
    if (this.fallingShape) {
      throw new Error("already falling")
    }
    const middleIndex = Math.floor(this.width / 2)
    this.fallingShape = element
    this.cells = insertIntoBoardCells(this.cells, 0, middleIndex, "falling")
  }

  tick = () => {
    const lastRow = this.height - 1
    for (let i = lastRow; i > 0; i--) {
      this.cells[i] = this.cells[i - 1] // move every row downwards
    }
    const newFirstRow = createEmptyRow(3)
    this.cells[0] = newFirstRow
  }

  hasFalling = () => {
    if (this.fallingShape) {
      return true
    } else {
      return false
    }
  }
}

const createEmptyRow = (width: number): Row => {
  let row: Row = []
  for (let i = 0; i < width; i++) {
    row.push('empty')
  }
  return row
}

export const createBoardCells = (rows: number, columns: number) => {
  let cells = []
  for (let i = 0; i < rows; i++) {
    const row = createEmptyRow(columns)
    cells.push(row)
  }
  return cells
}

export const insertIntoBoardCells = (boardCells: Cells, row: number, column: number, elementToInsert: BlockState): Cells => {
  boardCells[row].splice(column, 1, elementToInsert)
  return boardCells
}
