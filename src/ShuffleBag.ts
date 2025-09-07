import { ShapeChar } from "./Shape";

export class ShuffleBag {
    chars: ShapeChar[];
    length: number;
    contents: ShapeChar[];
    rngSeed: number;
    constructor(seed: number) {
        this.chars = ["I", "J", "L", "O", "S", "T", "Z"];
        this.length = this.chars.length;
        this.rngSeed = seed;
        this.contents = shuffle(this.chars, seed);
    }

    pull = () => {
        const toBePulled = this.contents[0];
        this.contents = this.contents.toSpliced(0, 1);
        return toBePulled;
    };
}

// modified from
// https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed
const shuffle = (array: Array<ShapeChar>, seed: number) => {
    let m = array.length;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        let i = Math.floor(random(seed) * m--);

        // And swap it with the current element.
        let t = array[m];
        array[m] = array[i];
        array[i] = t;
        ++seed;
    }

    return array;
};

const random = (seed: number) => {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
};
