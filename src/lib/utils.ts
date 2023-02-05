import type { Coords, Size } from "$types"

function clamp(min: number, num: number, max: number): number {
    return Math.min(Math.max(num, min), max)
};

function random(size: Size): Coords {
    const { width, height } = size
    return {
        x: Math.round(Math.random() * (width - 1)),
        y: Math.round(Math.random() * (height - 1)),
    }
}

function equal(field: Coords, pixel: Coords) {
    return field.x === pixel.x && field.y === pixel.y
}

export { clamp, random, equal }