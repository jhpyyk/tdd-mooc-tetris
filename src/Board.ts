export class Board {
  width;
  height;
  cells: Array<Array<string>>;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = createBoardCells(height, width)
  }

  toString() {
    let boardString = ''
    for (const row of this.cells) {
      let rowString = ''
      for (const rowCell of row) {
        rowString = rowString.concat(rowCell)
      }
      rowString = rowString.concat('\n')
      boardString = boardString.concat(rowString)
    }
    return boardString
  }

  drop = (element: string) => {
    const middleIndex = Math.floor(this.width / 2)
    this.cells = insertIntoBoardCells(this.cells, 0, middleIndex, element)
  }

  tick = () => {
    const lastRow = this.height - 1
    for (let i = lastRow; i > 0; i--) {
      this.cells[i] = this.cells[i - 1] // move every row downwards
    }
    const newFirstRow = createEmptyRow(3)
    this.cells[0] = newFirstRow
  }
}

const createEmptyRow = (width: number): Array<string> => {
  let row: Array<string> = []
  for (let i = 0; i < width; i++) {
    row.push('.')
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

export const insertIntoBoardCells = (boardCells: Array<Array<string>>, row: number, column: number, elementToInsert: string): Array<Array<string>> => {
  boardCells[row].splice(column, 1, elementToInsert)
  return boardCells
}
