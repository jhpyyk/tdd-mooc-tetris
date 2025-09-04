import { Cells, Position } from "./Board";
import { Shape } from "./Shape";

export interface RotationSystem {
    kickPositions: Position[];
    calculateNewAbsolutePosition: (cells: Cells, shape: Shape, shapePos: Position) => Position | undefined;
}

export class SimpleWallKick implements RotationSystem {
    kickPositions = [
        {
            row: 0,
            col: 0,
        },
        {
            row: 0,
            col: 1,
        },
        {
            row: 0,
            col: -1,
        },
    ];
    calculateNewAbsolutePosition = (cells: Cells, shape: Shape, shapePos: Position): Position | undefined => {
        for (const pos of this.kickPositions) {
            const absolutePosition: Position = { row: shapePos.row + pos.row, col: shapePos.col + pos.col };
            if (this.isShapeAbleToBeInsertedTo(cells, shape, absolutePosition)) {
                return absolutePosition;
            }
        }
        return undefined;
    };

    isShapeAbleToBeInsertedTo = (cells: Cells, shape: Shape, pos: Position) => {
        for (let shapeRow = 0; shapeRow < shape.cells.length; shapeRow++) {
            for (let shapeCol = 0; shapeCol < shape.cells[0].length; shapeCol++) {
                if (!this.isShapeCellAbleToBeInserted(cells, shape, shapeRow, shapeCol, pos)) {
                    return false;
                }
            }
        }

        return true;
    };

    isShapeCellAbleToBeInserted = (cells: Cells, shape: Shape, shapeRow: number, shapeCol: number, pos: Position) => {
        return (
            isShapeCellEmpty(shape, shapeRow, shapeCol) ||
            isBoardCellEmpty(cells, pos.row + shapeRow, pos.col + shapeCol)
        );
    };
}

const isShapeCellEmpty = (shape: Shape, row: number, col: number) => {
    return shape.cells[row] && shape.cells[row][col] && shape.cells[row][col] === ".";
};

const isBoardCellEmpty = (boardCells: Cells, row: number, col: number) => {
    return boardCells[row] && boardCells[row][col] && boardCells[row][col] === ".";
};
