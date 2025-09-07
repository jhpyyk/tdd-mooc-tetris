import { LineClearSubscriber } from "../Subscribers/LineClearSubscriber.ts";

export class SimpleLineScoringSystem {
    private currentScore: number;
    private currentLevel: number;
    private linesCleared: number;
    lineClearSubscriber: LineClearSubscriber;

    constructor(score: number = 0, level: number = 0, linesCleared: number = 0) {
        this.currentScore = score;
        this.currentLevel = level;
        this.linesCleared = linesCleared;
        this.lineClearSubscriber = new LineClearSubscriber("Line clear", this.scoreLines);
    }

    getCurrentScore = () => {
        return this.currentScore;
    };

    getCurrentLevel = () => {
        return this.currentLevel;
    };

    scoreLines = (lines: number) => {
        this.currentScore = this.currentScore + calculateScore(lines, this.currentLevel);
        this.linesCleared = this.linesCleared + lines;
        if (this.linesCleared >= 10 * (this.currentLevel + 1)) {
            this.currentLevel = this.currentLevel + 1;
        }
    };
}

const calculateScore = (lines: number, level: number) => {
    console.log("calculating score", lines, LINE_SCORE_BASE[lines]);
    return LINE_SCORE_BASE[lines] * (level + 1);
};

const LINE_SCORE_BASE: Record<number, number> = {
    0: 0,
    1: 40,
    2: 200,
    3: 300,
    4: 1200,
};
