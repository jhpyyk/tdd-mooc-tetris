import { expect } from "chai";
import { describe, test } from "vitest";

describe("Shuffle bag ", () => {
    test("length is 7", () => {
        const bag = createShuffleBag();
        expect(bag.length).to.equal(7);
    });
});
