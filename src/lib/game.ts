import { get, writable } from 'svelte/store';
import { snake } from './snake';
import { apple } from './apple';
import { clamp, random } from './utils';
import type { Field } from '$types';

function createField() {
    const { subscribe, set } = writable<Field>()
    set({
        width: 20,
        height: 20,
        part: 1.5,
        gap: 1.5,
        cell: 15
    })
    return {
        set,
        subscribe,
        random() {
            return random(get(this))
        }
    }
}
export const field = createField()

export const isPlaying = writable<boolean>(false);
export const score = writable<number>(0);
export const speed = writable<number>(1);

export function start() {
    isPlaying.set(true);
    snake.init();
    apple.make();
    tick();
}

export function stop() {
    isPlaying.set(false);
    snake.set([{ x: 0, y: 0 }])
}

function tick() {
    setTimeout(() => {
        if (get(isPlaying)) {
            move();
            tick();
        }
    }, 500 - (50 * (get(speed) - 1)));
}

function move() {
    snake.moveHead();

    if (snake.include(snake.head)) return stop();

    if (snake.head.y < 0) {
        snake.head.y = get(field).height - 1
    } else if (snake.head.y >= get(field).height) {
        snake.head.y = 0
    } else if (snake.head.x < 0) {
        snake.head.x = get(field).width - 1
    } else if (snake.head.x >= get(field).width) {
        snake.head.x = 0
    }

    snake.moveBody();

    if (apple.include(snake.head)) {
        apple.make();
        snake.makeLonger = true;
        score.update(score => score += 10 * get(speed));
        if (!(get(snake).length % 5)) {
            speed.update(speed => clamp(1, speed + 1, 10))
        }
    }
}