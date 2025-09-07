import { expect } from "chai";
import { describe, test } from "vitest";
import { ShuffleBag } from "../src/ShuffleBag";

describe("Shuffle bag ", () => {
    const bag = new ShuffleBag();
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
});
