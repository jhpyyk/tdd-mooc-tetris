export class SimpleLineScoringSystem {
    private currentScore = 0;
    private currentLevel = 1;

    getCurrentScore = () => {
        return this.currentScore;
    };

    getCurrentLevel = () => {
        return this.currentLevel;
    };
}
