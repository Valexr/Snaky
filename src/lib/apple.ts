import { get, writable } from 'svelte/store';
import { field } from './game';
// import { snake } from './snake';
import type { Cell } from '$types';
import { equal } from './utils';

function createApple() {
    const { subscribe, set } = writable<Cell>({ x: 0, y: 0 })

    return {
        subscribe,
        generate() {
            // let pixel: Cell;
            // do pixel = field.random();
            // while (snake.include(pixel))
            set(field.random());
        },
        include(pixel: Cell) {
            return equal(get(this), pixel)
        }
    }
};

export const apple = createApple()

