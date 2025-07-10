import Shape, { reverseRows, rotateClockwise, rotateCounterClockwise, transpose } from "./Shape";
import { TETROMINO_I, TETROMINO_J, TETROMINO_L, TETROMINO_O, TETROMINO_S, TETROMINO_T, TETROMINO_T_SHAPE, TETROMINO_Z } from "./tetrominoShapes";

type TetrominoShape = Array<Array<string>>
type TetrominoOrientations = Array<TetrominoShape>

export class Tetromino implements Shape {
    static I_SHAPE = new Tetromino(TETROMINO_I, 0)
    static O_SHAPE = new Tetromino(TETROMINO_O, 0)
    static T_SHAPE = new Tetromino(TETROMINO_T, 0)
    static J_SHAPE = new Tetromino(TETROMINO_J, 0)
    static L_SHAPE = new Tetromino(TETROMINO_L, 0)
    static S_SHAPE = new Tetromino(TETROMINO_S, 0)
    static Z_SHAPE = new Tetromino(TETROMINO_Z, 0)

    orientationNumber: number;

    tetrominoOrientations: TetrominoOrientations

    constructor(tetromino: TetrominoOrientations, orientation: number) {
        this.tetrominoOrientations = tetromino
        this.orientationNumber = orientation
    }

    toString = () => {
        let shapeString = "";
        for (const row of this.tetrominoOrientations[this.orientationNumber]) {
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
        let newOrientation = this.orientationNumber + 1
        if (newOrientation > this.tetrominoOrientations.length - 1) {
            newOrientation = 0
        }
        return new Tetromino(this.tetrominoOrientations, newOrientation)
    }

    rotateLeft = () => {
        let newOrientation = this.orientationNumber - 1
        if (newOrientation < 0) {
            newOrientation = this.tetrominoOrientations.length - 1 
        }
        return new Tetromino(this.tetrominoOrientations, newOrientation)
    }
}