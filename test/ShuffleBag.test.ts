import { expect } from "chai";
import { beforeEach, describe, test } from "vitest";
import { ShuffleBag } from "../src/ShuffleBag";
import { ShapeChar } from "../src/Shape";

describe("Shuffle bag ", () => {
    let bag: ShuffleBag;

    beforeEach(() => {
        bag = new ShuffleBag(123456);
    });
    test("length is 7", () => {
        expect(bag.length).to.equal(7);
    });

    test("will give a shape character", () => {
        const char = bag.pull();

        expect(bag.chars).to.include(char);
    });

    test("will not give the same character twice in a row initially", () => {
        const char1 = bag.pull();
        const char2 = bag.pull();

        expect(char1).not.to.equal(char2);
    });

    test("pulled characters are the same for the same seed", () => {
        const bag2 = new ShuffleBag(123456);

        let charsFromBag1: ShapeChar[] = [];
        let charsFromBag2: ShapeChar[] = [];

        for (let i = 0; i < bag.length; i++) {
            charsFromBag1 = charsFromBag1.concat(bag.pull());
            charsFromBag2 = charsFromBag2.concat(bag2.pull());
        }

        expect(charsFromBag1).to.be.deep.equal(charsFromBag2);
    });

    test("pulled characters are different for different seed", () => {
        const bag2 = new ShuffleBag(234567);

        let charsFromBag1: ShapeChar[] = [];
        let charsFromBag2: ShapeChar[] = [];

        for (let i = 0; i < bag.length; i++) {
            charsFromBag1 = charsFromBag1.concat(bag.pull());
            charsFromBag2 = charsFromBag2.concat(bag2.pull());
        }

        expect(charsFromBag1).not.to.be.deep.equal(charsFromBag2);
    });

    test("will give all the characters", () => {
        let charsFromBag: ShapeChar[] = [];

        for (let i = 0; i < bag.length; i++) {
            charsFromBag = charsFromBag.concat(bag.pull());
        }

        expect(charsFromBag.toSorted()).to.be.deep.equal(bag.chars.toSorted());
    });
});
