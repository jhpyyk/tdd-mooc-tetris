import {Shape, ShapeCells, ShapeChar } from "./Shape";

type BlockOrientations = Array<ShapeCells>

export const BLOCK_SHAPE_X: BlockOrientations = [
    [['X']]
]

export const BLOCK_SHAPE_Y:BlockOrientations = [
    [['Y']]
]

export class OneByOneBlock implements Shape {

    static BLOCK_X = new OneByOneBlock(BLOCK_SHAPE_X, 0, 'X')
    static BLOCK_Y = new OneByOneBlock(BLOCK_SHAPE_Y, 0, 'Y')

    blockOrientations: BlockOrientations
    orientationNumber: number
    cells: ShapeCells
    shapeChar: ShapeChar

    constructor(block: BlockOrientations, orientation: number, shapeChar: ShapeChar) {
        this.blockOrientations = block
        this.orientationNumber = orientation
        this.cells = this.blockOrientations[this.orientationNumber]
        this.shapeChar = shapeChar
    }

    toString = () => {
        return this.blockOrientations[0][0][0]
    }

    rotateLeft = () => {
        return new OneByOneBlock(this.blockOrientations, this.orientationNumber, this.shapeChar)
    }

    rotateRight = () => {
        return new OneByOneBlock(this.blockOrientations, this.orientationNumber, this.shapeChar)
    }
}