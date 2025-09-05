export class SimpleLineScoringSystem {
    private currentScore;
    private currentLevel;

    constructor(score: number = 0, level: number = 0) {
        this.currentScore = score;
        this.currentLevel = level;
    }

    getCurrentScore = () => {
        return this.currentScore;
    };

    getCurrentLevel = () => {
        return this.currentLevel;
    };

    scoreLines = (lines: number) => {
        this.currentScore = this.currentScore + calculateScore(lines, this.currentLevel);
    };
}

const calculateScore = (lines: number, level: number) => {
    return LINE_SCORE_BASE[lines] * (level + 1);
};

const LINE_SCORE_BASE: Record<number, number> = {
    1: 40,
    2: 200,
    3: 300,
    4: 1200,
};
