interface Shape {
    toString: () => string

    rotateRight: () => Shape

    rotateLeft: () => Shape
}

export default Shape;