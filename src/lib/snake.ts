import { get, writable } from 'svelte/store';
import { equal } from './utils';
import type { Cell } from '$types';

function createSnake() {
    const { subscribe, set, update } = writable<Cell[]>([{ x: 0, y: 0 }])

    const directions: { [key: string]: Cell } = {
        Up: { x: 0, y: -1 },
        Down: { x: 0, y: 1 },
        Left: { x: -1, y: 0 },
        Right: { x: 1, y: 0 },
    };

    let head: Cell = { x: 0, y: 0 }
    let direction: Cell = { x: 1, y: 0 }
    let expand: boolean = false

    return {
        set,
        subscribe,
        update,
        head, direction, expand,
        init() {
            this.head = get(this)[0];
            this.direction = directions.Right;
        },
        moveHead() {
            this.head = {
                x: this.head.x + this.direction.x,
                y: this.head.y + this.direction.y,
            };
        },
        moveBody() {
            this.unshift(this.head);
            if (this.expand) {
                this.expand = false;
            } else {
                this.pop();
            }
        },
        direct(side: string) {
            this.direction = directions[side];
        },
        include(cell: Cell) {
            return get(this).some((field) => equal(field, cell));
        },
        unshift(cell: Cell) {
            set([cell, ...get(this)])
        },
        pop() {
            set(get(this).slice(0, -1))
        }
    }
}
export const snake = createSnake();