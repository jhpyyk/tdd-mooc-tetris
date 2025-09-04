import { ShapeChar } from "./Shape";

export type Position = {
    row: number;
    col: number;
};

export type RotationSystem = {
    shouldBeEmtpy: Position[];
    shouldBeEmtpyChars: Array<ShapeChar>;
    leftRotationPositions: Position[];
    rightRotationPositions: Position[];
};

export const noWallKicks: RotationSystem = {
    shouldBeEmtpy: [],
    shouldBeEmtpyChars: [],
    leftRotationPositions: [
        {
            row: 0,
            col: 0,
        },
    ],
    rightRotationPositions: [
        {
            row: 0,
            col: 0,
        },
    ],
};

export const simpleWallkick: RotationSystem = {
    shouldBeEmtpy: [],
    shouldBeEmtpyChars: [],
    leftRotationPositions: [
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
    ],
    rightRotationPositions: [
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
    ],
};

export const arika: RotationSystem = {
    shouldBeEmtpyChars: ["T", "J", "L"],
    shouldBeEmtpy: [
        {
            row: 0,
            col: 1,
        },
        {
            row: 1,
            col: 1,
        },
    ],
    leftRotationPositions: [
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
    ],
    rightRotationPositions: [
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
    ],
};
