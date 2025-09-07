import { expect } from "chai";
import { describe, test } from "vitest";
import { ShuffleBag } from "../src/ShuffleBag";

describe("Shuffle bag ", () => {
    const bag = new ShuffleBag();
    test("length is 7", () => {
        expect(bag.length).to.equal(7);
    });
});
