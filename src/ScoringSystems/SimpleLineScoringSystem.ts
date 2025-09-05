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
    return 40 * (level + 1);
};
