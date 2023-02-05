import type { Cell, Field } from "$types"

function clamp(min: number, num: number, max: number): number {
    return Math.min(Math.max(num, min), max)
};

function random(size: Field): Cell {
    return {
        x: Math.round(Math.random() * (size.width - 1)),
        y: Math.round(Math.random() * (size.height - 1)),
    }
}

function equal(field: Cell, pixel: Cell) {
    return field.x === pixel.x && field.y === pixel.y
}

export { clamp, random, equal }