import { ShapeChar } from "./Shape";

export class ShuffleBag {
    chars: ShapeChar[];
    length: number;
    contents: ShapeChar[];
    constructor() {
        this.chars = ["I", "J", "L", "O", "S", "T", "Z"];
        this.length = this.chars.length;
        this.contents = this.chars;
    }

    pull = () => {
        return this.contents[0];
    };
}
