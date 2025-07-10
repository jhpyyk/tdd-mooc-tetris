import Shape, { ShapeCells } from "./Shape";

type BlockShape = Array<Array<string>>
type BlockOrientations = Array<BlockShape>

export const BLOCK_SHAPE_X = [
    [['X']]
]

export const BLOCK_SHAPE_Y = [
    [['Y']]
]

export class OneByOneBlock implements Shape {

    static BLOCK_X = new OneByOneBlock(BLOCK_SHAPE_X, 0)
    static BLOCK_Y = new OneByOneBlock(BLOCK_SHAPE_Y, 0)

    blockOrientations: BlockOrientations
    orientationNumber: number
    cells: ShapeCells

    constructor(block: BlockOrientations, orientation: number) {
        this.blockOrientations = block
        this.orientationNumber = orientation
        this.cells = this.blockOrientations[this.orientationNumber]
    }

    toString = () => {
        return this.blockOrientations[0][0][0]
    }

    rotateLeft = () => {
        return new OneByOneBlock(this.blockOrientations, this.orientationNumber)
    }

    rotateRight = () => {
        return new OneByOneBlock(this.blockOrientations, this.orientationNumber)
    }
}