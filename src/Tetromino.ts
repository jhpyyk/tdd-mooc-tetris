import { Shape, ShapeCells, ShapeChar } from "./Shape";
import {
    ARIKA_T,
    TETROMINO_I,
    TETROMINO_J,
    TETROMINO_L,
    TETROMINO_O,
    TETROMINO_S,
    TETROMINO_T,
    TETROMINO_T_SHAPE,
    TETROMINO_Z,
} from "./tetrominoShapes";

type TetrominoOrientations = Array<ShapeCells>;

export class Tetromino implements Shape {
    static I_SHAPE = new Tetromino(TETROMINO_I, 0, "I");
    static O_SHAPE = new Tetromino(TETROMINO_O, 0, "O");
    static T_SHAPE = new Tetromino(TETROMINO_T, 0, "T");
    static J_SHAPE = new Tetromino(TETROMINO_J, 0, "J");
    static L_SHAPE = new Tetromino(TETROMINO_L, 0, "L");
    static S_SHAPE = new Tetromino(TETROMINO_S, 0, "S");
    static Z_SHAPE = new Tetromino(TETROMINO_Z, 0, "Z");

    static ARIKA_T = new Tetromino(ARIKA_T, 0, "T");

    orientationNumber: number;

    tetrominoOrientations: TetrominoOrientations;

    cells: ShapeCells;

    shapeChar: ShapeChar;

    constructor(tetromino: TetrominoOrientations, orientation: number, shapeChar: ShapeChar) {
        this.tetrominoOrientations = tetromino;
        this.orientationNumber = orientation;
        this.cells = this.tetrominoOrientations[this.orientationNumber];
        this.shapeChar = shapeChar;
    }

    toString = () => {
        let shapeString = "";
        for (const row of this.tetrominoOrientations[this.orientationNumber]) {
            let rowString = "";
            for (const rowCell of row) {
                rowString = rowString.concat(rowCell);
            }
            rowString = rowString.concat("\n");
            shapeString = shapeString.concat(rowString);
        }
        return shapeString;
    };

    rotateRight = () => {
        let newOrientation = this.orientationNumber + 1;
        if (newOrientation > this.tetrominoOrientations.length - 1) {
            newOrientation = 0;
        }
        return new Tetromino(this.tetrominoOrientations, newOrientation, this.shapeChar);
    };

    rotateLeft = () => {
        let newOrientation = this.orientationNumber - 1;
        if (newOrientation < 0) {
            newOrientation = this.tetrominoOrientations.length - 1;
        }
        return new Tetromino(this.tetrominoOrientations, newOrientation, this.shapeChar);
    };
}
