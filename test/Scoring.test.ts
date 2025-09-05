import { expect } from "chai";
import { describe, test } from "vitest";
import { SimpleLineScoringSystem } from "../src/ScoringSystems/SimpleLineScoringSystem";

describe("The scoring system ", () => {
    test("has an initial score of 0", () => {
        const scoringSystem = new SimpleLineScoringSystem();

        expect(scoringSystem.getCurrentScore()).to.equal(0);
    });
});
