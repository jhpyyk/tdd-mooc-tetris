import { ShapeChar } from "./Shape";

export type ShuffleBag = ShapeChar[];

export const createShuffleBag = (): ShuffleBag => {
    return ["I", "J", "L", "O", "S", "T", "Z"];
};
