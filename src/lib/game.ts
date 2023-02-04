import { store, type UnsubscribeFn } from 'storxy';
import { snake } from './snake';
import { apple } from './apple';
import type { FieldSize, Size } from '$types';

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
export const speed = store<number>(1);

let unsubscribe: UnsubscribeFn;

export function start() {
    isPlaying.$ = true;
    snake.init();
    apple.generate();

    unsubscribe = snake.head.$$((head) => {
        if (head.x >= fieldSize.$.width
            || head.x < 0
            || head.y >= fieldSize.$.height
            || head.y < 0
            || snake.isPixelInBody(head.x, head.y)
        ) return stop();

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

function tick() {
    setTimeout(() => {
        if (isPlaying.$) {
            snake.head.move();
            tick();
        }
    }, 500 - (50 * (speed.$ - 1)));
}

export function stop() {
    isPlaying.$ = false;
    unsubscribe();
}