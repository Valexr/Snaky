import { get, writable } from 'svelte/store';
import { field } from './game';
import { snake } from './snake';
import { random } from './utils';
import type { Coords } from '$types';

function createApple() {
    const { subscribe, set } = writable<Coords>({ x: 0, y: 0 })

    return {
        subscribe,
        generate() {
            let pixel: Coords;
            do {
                pixel = random(get(field));
            } while (snake.isPixelInBody(pixel))
            set(pixel);
        },
        isPixelAnApple(pixel: Coords) {
            return pixel.x === get(this).x && pixel.y === get(this).y
        }
    }
};

export const apple = createApple()

