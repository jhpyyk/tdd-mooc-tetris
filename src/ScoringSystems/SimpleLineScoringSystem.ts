export class SimpleLineScoringSystem {
    private currentScore = 0;
    private currentLevel = 0;

    getCurrentScore = () => {
        return this.currentScore;
    };

    getCurrentLevel = () => {
        return this.currentLevel;
    };

    scoreLines = (lines: number) => {};
}

const calculateScore = (lines: number, level: number) => {};
