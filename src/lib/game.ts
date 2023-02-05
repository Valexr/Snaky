import { get, writable } from 'svelte/store';
import { snake } from './snake';
import { apple } from './apple';
import { clamp } from './utils';
import type { Size } from '$types';

export const field = writable<Size>({
    width: 20,
    height: 20,
    part: 1.5,
    gap: 1.5,
    cell: 15
});

export const isPlaying = writable<boolean>(false);
export const score = writable<number>(0);
export const speed = writable<number>(1);

export function start() {
    isPlaying.set(true);
    snake.init();
    apple.generate();
    tick();
}

function move() {
    snake.moveHead();

    if (snake.isPixelInBody(snake.head)) return stop();

    if (snake.head.y < 0) {
        snake.head.y = get(field).height + snake.direction.y
    } else if (snake.head.y >= get(field).height) {
        snake.head.y = snake.direction.y - 1
    } else if (snake.head.x < 0) {
        snake.head.x = get(field).width + snake.direction.x
    } else if (snake.head.x >= get(field).width) {
        snake.head.x = snake.direction.x - 1
    }

    if (apple.isPixelAnApple(snake.head)) {
        apple.generate();
        snake.makeLonger = true;
        score.update(score => score += 10 * get(speed));
        if (!(get(snake).length % 5)) {
            speed.update(speed => clamp(1, speed + 1, 10))
        }
    }
    snake.moveBody();
}

function tick() {
    setTimeout(() => {
        if (get(isPlaying)) {
            move();
            tick();
        }
    }, 500 - (50 * (get(speed) - 1)));
}

export function stop() {
    isPlaying.set(false);
    snake.set([{ x: 0, y: 0 }])
}