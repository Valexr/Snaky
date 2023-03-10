import { get, writable } from 'svelte/store';
import { field } from './game';
import { snake } from './snake';
import { equal } from './utils';
import type { Cell } from '$types';

function createApple() {
    const { subscribe, set } = writable<Cell>({ x: 0, y: 0 })

    return {
        subscribe,
        make() {
            let cell: Cell;
            do cell = field.random();
            while (snake.include(cell))
            set(cell);
        },
        include(cell: Cell) {
            return equal(get(this), cell)
        }
    }
};

export const apple = createApple()

