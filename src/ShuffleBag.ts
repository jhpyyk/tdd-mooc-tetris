import { ShapeChar } from "./Shape";

export class ShuffleBag {
    chars: ShapeChar[];
    length: number;
    constructor() {
        this.chars = ["I", "J", "L", "O", "S", "T", "Z"];
        this.length = this.chars.length;
    }
}
