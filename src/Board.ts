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
