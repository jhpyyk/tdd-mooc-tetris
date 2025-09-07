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
        const toBePulled = this.contents[0];
        this.contents = this.contents.toSpliced(0, 1);
        return toBePulled;
    };
}
