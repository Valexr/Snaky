import { store } from 'storxy';
import { fieldSize } from './game';
import { snake } from './snake';
import type { Apple, Coords } from '$types';

/** An apple coords */
export const apple = store<Coords>() as Apple;

/** Generate new apple and chek that it is not in snake's body */
apple.generate = () => {
    let pixel;
    do {
        pixel = generateRandomPixel(fieldSize.$.width - 1, fieldSize.$.height - 1);
    } while (snake.isPixelInBody(pixel.x, pixel.y))
    apple.$ = pixel;
}

/** Check that specified coords is match apple position */
apple.isPixelAnApple = (x, y) => {
    return x === apple.$?.x && y === apple.$?.y
}

function generateRandomPixel(width: number, height: number) {
    return {
        x: Math.round(Math.random() * width),
        y: Math.round(Math.random() * height),
    }
}