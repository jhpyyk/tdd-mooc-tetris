import { expect } from "chai";
import { beforeAll, beforeEach, describe, test } from "vitest";
import { SimpleLineScoringSystem } from "../src/ScoringSystems/SimpleLineScoringSystem";

describe("The scoring system ", () => {
    let scoringSystem: SimpleLineScoringSystem;

    beforeEach(() => {
        scoringSystem = new SimpleLineScoringSystem();
    });

    test("has an initial score of 0", () => {
        expect(scoringSystem.getCurrentScore()).to.equal(0);
    });

    test("starts at level one", () => {
        expect(scoringSystem.getCurrentLevel()).to.equal(0);
    });

    test("clearing one line will score 40 points in level zero", () => {
        expect(scoringSystem.getCurrentLevel()).to.equal(0);
        scoringSystem.scoreLines(1);
        expect(scoringSystem.getCurrentScore()).to.equal(40);
    });

    test("clearing two lines will score 200 points in level one", () => {
        expect(scoringSystem.getCurrentLevel()).to.equal(0);
        scoringSystem.scoreLines(2);
        expect(scoringSystem.getCurrentScore()).to.equal(200);
    });
});
