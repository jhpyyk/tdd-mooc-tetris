export class Board {
  width;
  height;
  cells: Array<Array<string>>;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cells = []
  }

  toString() {
    return "TODO";
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
