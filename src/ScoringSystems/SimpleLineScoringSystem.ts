export class SimpleLineScoringSystem {
    private currentScore;
    private currentLevel;
    private linesCleared;

    constructor(score: number = 0, level: number = 0, linesCleared: number = 0) {
        this.currentScore = score;
        this.currentLevel = level;
        this.linesCleared = linesCleared;
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
        if (this.linesCleared >= 10 * arithmeticSum(this.currentLevel + 1)) {
            this.currentLevel = this.currentLevel + 1;
        }
    };
}

const arithmeticSum = (n: number) => {
    return (n * (n + 1)) / 2;
};

const calculateScore = (lines: number, level: number) => {
    return LINE_SCORE_BASE[lines] * (level + 1);
};

const LINE_SCORE_BASE: Record<number, number> = {
    1: 40,
    2: 200,
    3: 300,
    4: 1200,
};
