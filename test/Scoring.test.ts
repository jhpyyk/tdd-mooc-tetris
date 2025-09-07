import { expect } from "chai";
import { beforeAll, beforeEach, describe, test } from "vitest";
import { SimpleLineScoringSystem } from "../src/ScoringSystems/SimpleLineScoringSystem";
import { setupFallingShape } from "./testUtils";
import { Board } from "../src/Board";
import { Tetromino } from "../src/Tetromino";

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

    test("clearing two lines will score 200 points in level zero", () => {
        expect(scoringSystem.getCurrentLevel()).to.equal(0);
        scoringSystem.scoreLines(2);
        expect(scoringSystem.getCurrentScore()).to.equal(200);
    });

    test("clearing three lines will score 300 points in level zero", () => {
        expect(scoringSystem.getCurrentLevel()).to.equal(0);
        scoringSystem.scoreLines(3);
        expect(scoringSystem.getCurrentScore()).to.equal(300);
    });

    test("clearing four lines will score 1200 points in level zero", () => {
        expect(scoringSystem.getCurrentLevel()).to.equal(0);
        scoringSystem.scoreLines(4);
        expect(scoringSystem.getCurrentScore()).to.equal(1200);
    });

    test("clearing two lines two times will add 400 points to the score in level zero", () => {
        expect(scoringSystem.getCurrentLevel()).to.equal(0);
        scoringSystem.scoreLines(2);
        scoringSystem.scoreLines(2);
        expect(scoringSystem.getCurrentScore()).to.equal(400);
    });

    test("clearing 3 lines will add 3000 points to the score in level nine", () => {
        scoringSystem = new SimpleLineScoringSystem(1000, 9);
        expect(scoringSystem.getCurrentLevel()).to.equal(9);
        expect(scoringSystem.getCurrentScore()).to.equal(1000);
        scoringSystem.scoreLines(3);
        expect(scoringSystem.getCurrentScore()).to.equal(4000);
    });

    test("clearing 10 lines will increase level from zero to one", () => {
        expect(scoringSystem.getCurrentLevel()).to.equal(0);
        scoringSystem.scoreLines(4);
        scoringSystem.scoreLines(4);
        scoringSystem.scoreLines(2);
        expect(scoringSystem.getCurrentLevel()).to.equal(1);
    });

    test("clearing 10 lines will increase level from one to two", () => {
        scoringSystem = new SimpleLineScoringSystem(0, 1, 10);
        scoringSystem.scoreLines(10);
        expect(scoringSystem.getCurrentLevel()).to.equal(2);
    });

    test("clearing 40 lines will increase level from three to seven", () => {
        scoringSystem = new SimpleLineScoringSystem(0, 3, 33);
        scoringSystem.scoreLines(10);
        scoringSystem.scoreLines(10);
        scoringSystem.scoreLines(10);
        scoringSystem.scoreLines(10);
        expect(scoringSystem.getCurrentLevel()).to.equal(7);
    });

    describe("adds score ", () => {
        let board = Board.fromString(
            `
                ..........    
                ..........    
                ..........    
                ..........    
                ..........    
                ZZZ...ZZZZ    
                `
        );
        board = setupFallingShape(board, Tetromino.ARIKA_T.rotateLeft().rotateLeft(), 2, 3);

        const scoringSystem = new SimpleLineScoringSystem();
        board.lineClearPublisher.attach(scoringSystem.lineClearSubscriber);

        test("when clearing one line", () => {
            expect(board.toString(), "Incorrect setup").to.equalShape(
                `
        ..........    
        ..........    
        ..........    
        ....T.....    
        ...TTT....    
        ZZZ...ZZZZ    
        `
            );

            board.tick();

            expect(board.toString(), "First tick").to.equalShape(
                `
        ..........    
        ..........    
        ..........    
        ..........    
        ....T.....    
        ZZZTTTZZZZ    
        `
            );

            board.tick();

            expect(scoringSystem.getCurrentScore()).to.equal(40);
        });
    });
});
