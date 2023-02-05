import { get, writable } from 'svelte/store';
import { score } from '$lib/game';
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
    let makeLonger: boolean = false

    return {
        set,
        subscribe,
        update,
        head, direction, makeLonger,
        init() {
            score.set(0);
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
            if (this.makeLonger) {
                this.makeLonger = false;
            } else {
                this.pop();
            }
        },
        include(pixel: Cell) {
            return get(this).some((field) => equal(field, pixel));
        },
        setDirection(dir: string) {
            this.direction = directions[dir];
        },
        unshift(pixel: Cell) {
            set([pixel, ...get(this)])
        },
        pop() {
            set(get(this).slice(0, -1))
        }
    }
}
export const snake = createSnake();