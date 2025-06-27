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

  // drop = () => {
  //   const middleIndex = 
  //   insertIntoBoardCells(0, )
  // }
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

export const insertIntoBoardCells = (boardCells: Array<Array<string>>, row: number, column: number, elementToInsert: string): Array<Array<string>> => {
  boardCells[row].splice(column, 1, elementToInsert)
  return boardCells
}
