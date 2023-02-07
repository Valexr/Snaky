import { get, writable } from 'svelte/store';
import { snake } from './snake';
import { apple } from './apple';
import { clamp, random } from './utils';
import type { Field, Game } from '$types';

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

function createGame() {
    const { subscribe, set, update } = writable<Game>()
    set({
        state: '',
        score: 0,
        speed: 1
    })
    function state(state: Game["state"]) {
        update(game => Object.assign(game, { state }))
    }
    function score(score: number) {
        update(game => Object.assign(game, { score }))
    }
    return {
        subscribe,
        state, score,
        start() {
            score(0)
            state('play');
            snake.init();
            apple.make();
            tick();
        },
        pause() {
            state('pause');
        },
        resume() {
            state('play');
            tick();
        },
        stop() {
            state('stop');
            snake.set([{ x: 0, y: 0 }])
        },
        scoreup() {
            update(game => Object.assign(game, { score: game.score + 10 * game.speed }))
        },
        speedup() {
            update(game => Object.assign(game, { speed: clamp(1, game.speed + 1, 10) }))
        }
    }
}

export const game = createGame()

function tick() {
    setTimeout(() => {
        if (get(game).state === 'play') {
            move();
            tick();
        }
    }, 500 / get(game).speed);
}

function move() {

    snake.moveHead();

    if (snake.include(snake.head)) return game.stop();

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
        snake.expand = true;
        game.scoreup();
        if (!(get(snake).length % 5)) {
            game.speedup()
        }
    }
}