export class SimpleLineScoringSystem {
    private currentScore = 0;
    private currentLevel = 0;

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
