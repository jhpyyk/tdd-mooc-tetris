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
