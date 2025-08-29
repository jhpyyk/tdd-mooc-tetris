export type Position = {
    row: number;
    col: number;
};

export type RotationSystem = {
    leftRotationPositions: Position[];
    rightRotationPositions: Position[];
};

export const noWallKicks: RotationSystem = {
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
