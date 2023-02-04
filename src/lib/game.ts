import { store, type UnsubscribeFn } from 'storxy';
import { snake } from './snake';
import { apple } from './apple';
import type { FieldSize, Size, Speed } from '$types';

/** Size of the game field in pixels */
export const fieldSize = store<Size>({
    width: 20,
    height: 20,
}) as FieldSize;

fieldSize.set = (size: Size) => fieldSize.$ = size

/** Current state of the game */
export const isPlaying = store<boolean>(false);

/** Score */
export const score = store<number>(0);

/** Speed */
export const speed = store<number>(1) as Speed;
speed.set = (value: number) => speed.$ = value

let unsubscribe: UnsubscribeFn;

export function start() {
    isPlaying.$ = true;
    snake.init();
    apple.generate();

    unsubscribe = snake.head.$$((head) => {
        if (snake.isPixelInBody(head.x, head.y)) return stop();

        if (head.y < 0) {
            snake.head.$ = {
                x: snake.head.$.x + snake.direction.$.x,
                y: fieldSize.$.height + snake.direction.$.y,
            };
        } else if (head.y >= fieldSize.$.height) {
            snake.head.$ = {
                x: snake.head.$.x + snake.direction.$.x,
                y: -1 + snake.direction.$.y,
            };
        } else if (head.x < 0) {
            snake.head.$ = {
                x: fieldSize.$.width + snake.direction.$.x,
                y: snake.head.$.y + snake.direction.$.y,
            };
        } else if (head.x >= fieldSize.$.width) {
            snake.head.$ = {
                x: -1 + snake.direction.$.x,
                y: snake.head.$.y + snake.direction.$.y,
            };
        }
        if (head.x === apple.$.x && head.y === apple.$.y) {
            apple.generate();
            snake.makeLonger.$ = true;
            score.$ += 10 * speed.$;
            if (!(snake.$.length % 5)) {
                speed.$++;
            }
        }

        snake.moveBody();
    });
    tick();
}

const clamp = (min: number, num: number, max: number) => Math.min(Math.max(num, min), max);

function tick() {
    setTimeout(() => {
        if (isPlaying.$) {
            snake.head.move();
            tick();
        }
    }, 500 - (50 * (clamp(1, speed.$ - 1, 9))));
}

export function stop() {
    isPlaying.$ = false;
    snake.$ = [{ x: -1, y: 0 }]
    unsubscribe();
}