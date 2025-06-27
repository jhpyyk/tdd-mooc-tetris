export class Board {
  width;
  height;
  cells: Array<Array<string>>;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = createBoardCells(width, height)
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
}

export const createBoardCells = (rows: number, columns: number) => {
  let cells = []
  for (let i = 0; i < rows; i++) {
    let row: Array<string> = []
    for (let j = 0; j < columns; j++) {
      row.push('.')
    }
    cells.push(row)
  }
  return cells
}

export const insertIntoBoard = (board: Board, row: number, column: number, elementToInsert: string): Board => {
  board.cells[row].splice(column, 0, elementToInsert)
  return board
}
