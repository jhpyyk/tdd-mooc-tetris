import Shape from "./Shape";

class Tetromino implements Shape {
    toString = () => {
        return ''
    };
    rotateRight = () => {
        return new Tetromino()
    };
    rotateLeft = () => {
        return new Tetromino()
    };
}

export default Tetromino