import { Shape, ShapeCells, ShapeChar } from "./Shape";
import { ARIKA_I, ARIKA_J, ARIKA_L, ARIKA_O, ARIKA_S, ARIKA_T, ARIKA_Z } from "./tetrominoShapes";

type TetrominoOrientations = Array<ShapeCells>;

export class Tetromino implements Shape {
    static ARIKA_I = new Tetromino(ARIKA_I, 0, "I");
    static ARIKA_O = new Tetromino(ARIKA_O, 0, "O");
    static ARIKA_T = new Tetromino(ARIKA_T, 0, "T");
    static ARIKA_J = new Tetromino(ARIKA_J, 0, "J");
    static ARIKA_L = new Tetromino(ARIKA_L, 0, "L");
    static ARIKA_S = new Tetromino(ARIKA_S, 0, "S");
    static ARIKA_Z = new Tetromino(ARIKA_Z, 0, "Z");

    static fromChar = (char: ShapeChar) => {
        switch (char) {
            case "I":
                return this.ARIKA_I;
            case "O":
                return this.ARIKA_O;
            case "T":
                return this.ARIKA_T;
            case "S":
                return this.ARIKA_S;
            case "Z":
                return this.ARIKA_Z;
            case "L":
                return this.ARIKA_L;
            case "J":
                return this.ARIKA_J;
            case ".":
                throw new Error("Not a tetromino char");
            case "X":
                throw new Error("Not a tetromino char");
            case "Y":
                throw new Error("Not a tetromino char");
        }
    };

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
