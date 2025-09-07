import { Board } from "./Board.ts";
import { SimpleLineScoringSystem } from "./ScoringSystems/SimpleLineScoringSystem.ts";
import { ShapeChar } from "./Shape.ts";
import { ShuffleBag } from "./ShuffleBag.ts";
import { Tetromino } from "./Tetromino.ts";

// TODO: change this code to match the API you have created, if you want to run the game for some manual testing

interface Game {
    columns: number;
    rows: number;
    tickDuration: number;
    nextTick: number;
    board: Board;
    scoring: SimpleLineScoringSystem;
    bag: ShuffleBag;
}

function initGame() {
    console.log("init game");
    const canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;

    const game: Game = {
        columns: 10,
        rows: 21,
        tickDuration: 1000,
        nextTick: 0,
        scoring: new SimpleLineScoringSystem(),
        board: new Board(10, 20),
        bag: new ShuffleBag(Math.floor(Math.random() * 100000)),
    };
    game.board.lineClearPublisher.attach(game.scoring.lineClearSubscriber);

    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            for (let i = 0; i < game.rows; i++) {
                game.board.moveDown();
            }
        } else if (event.key === "z") {
            game.board.rotateLeft();
        } else if (event.key === "x") {
            game.board.rotateRight();
        } else if (event.code === "ArrowUp") {
            game.board.rotateRight();
        } else if (event.code === "ArrowDown") {
            game.board.moveDown();
        } else if (event.code === "ArrowLeft") {
            game.board.moveLeft();
        } else if (event.code === "ArrowRight") {
            game.board.moveRight();
        } else {
            return;
        }
        event.preventDefault(); // prevent game keys from scrolling the window
    });

    const render = (timestamp: number) => {
        progressTime(game, timestamp);
        renderGame(game, canvas, timestamp);
        window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
}

// game logic

function progressTime(game: Game, timestamp: number) {
    if (timestamp >= game.nextTick) {
        tick(game);
        adjustDifficulty(game);
        game.nextTick = timestamp + game.tickDuration;
    }
}

function tick(game: Game) {
    if (!game.board.hasFalling()) {
        game.board.drop(Tetromino.fromChar(game.bag.pull()));
    } else {
        game.board.tick();
    }
}

function adjustDifficulty(game: Game) {
    const tickDuration = TICK_DURATION_PER_LEVEL[game.scoring.getCurrentLevel()];
    if (tickDuration) {
        game.tickDuration = tickDuration;
    }
}

const TICK_DURATION_PER_LEVEL: Record<number, number> = {
    1: 33 * 15,
    2: 33 * 13,
    3: 33 * 11,
    4: 33 * 9,
    5: 33 * 7,
    6: 33 * 5,
    7: 33 * 4,
    8: 33 * 3,
    9: 33 * 2,
    10: 33,
};

// rendering

function renderGame(game: Game, canvas: HTMLCanvasElement, timestamp: number) {
    const ctx = canvas.getContext("2d");
    const canvasWidth = (canvas.width = canvas.clientWidth);
    const canvasHeight = (canvas.height = canvas.clientHeight);
    const cellWidth = canvasWidth / game.columns;
    const cellHeight = canvasHeight / game.rows;
    if (!ctx) {
        throw new Error("Unable to get 2D context");
    }
    drawBackground(ctx, canvasWidth, canvasHeight);
    for (let row = game.board.hiddenLayers; row < game.rows; row++) {
        for (let column = 0; column < game.columns; column++) {
            const cell = game.board.cellAt(row, column);
            drawCell(ctx, cell, row, column, cellWidth, cellHeight);
        }
    }
    drawScoring(ctx, game.scoring.getCurrentScore(), game.scoring.getCurrentLevel(), canvasWidth);
}

function drawBackground(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawCell(
    ctx: CanvasRenderingContext2D,
    cell: ShapeChar,
    row: number,
    column: number,
    cellWidth: number,
    cellHeight: number
) {
    ctx.fillStyle = CELL_COLORS[cell];
    const x = cellWidth * column;
    const y = cellHeight * row;
    ctx.fillRect(x, y, cellWidth, cellHeight);
}

const CELL_COLORS: Record<ShapeChar, string> = {
    ".": "#ffffff",
    I: "#cc1c19",
    T: "#3a88b2",
    L: "#c85c14",
    J: "#312cc3",
    S: "#921392",
    Z: "#2e9915",
    O: "#9a8016",
    X: "#c85c14",
    Y: "#c85c14",
};

function drawScoring(ctx: CanvasRenderingContext2D, score: number, level: number, canvasWidth: number) {
    const margin = 5;
    const fontSize = 22;
    drawText(ctx, `Level ${level}`, margin, fontSize + margin, `${fontSize}px sans-serif`, undefined);
    drawText(ctx, `Score ${score}`, canvasWidth - margin, fontSize + margin, `${fontSize}px sans-serif`, "right");
}

function drawText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    font: string,
    textAlign: CanvasTextAlign | undefined
) {
    ctx.font = font;
    ctx.textAlign = textAlign || "left";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, x, y);
}

console.log("call init");

initGame();
