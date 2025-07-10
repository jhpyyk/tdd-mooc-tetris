import Shape, { reverseRows, rotateClockwise, rotateCounterClockwise, transpose } from "./Shape";
import { TETROMINO_I, TETROMINO_J, TETROMINO_L, TETROMINO_O, TETROMINO_S, TETROMINO_T, TETROMINO_Z } from "./tetrominoShapes";

type TetrominoShape = Array<Array<string>>

export class Tetromino implements Shape {
    static I_SHAPE = new Tetromino(TETROMINO_I)
    static O_SHAPE = new Tetromino(TETROMINO_O)
    static T_SHAPE = new Tetromino(TETROMINO_T)
    static J_SHAPE = new Tetromino(TETROMINO_J)
    static L_SHAPE = new Tetromino(TETROMINO_L)
    static S_SHAPE = new Tetromino(TETROMINO_S)
    static Z_SHAPE = new Tetromino(TETROMINO_Z)

    cells: TetrominoShape;

    constructor(cells: TetrominoShape) {
        this.cells = cells
    }

    toString = () => {
        let shapeString = "";
        for (const row of this.cells) {
            let rowString = "";
            for (const rowCell of row) {
            rowString = rowString.concat(rowCell)
            }
            rowString = rowString.concat("\n");
            shapeString = shapeString.concat(rowString);
        }
        return shapeString;
    }

    rotateRight = () => {
        const rotated = rotateClockwise(this.cells)
        return new Tetromino(rotated)
    }

    rotateLeft = () => {
        const rotated = rotateCounterClockwise(this.cells)
        return new Tetromino(rotated)
    }
}