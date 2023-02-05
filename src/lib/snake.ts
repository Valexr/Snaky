import { store } from 'storxy';
import { score, speed } from '$lib/game';
import type { Coords, Snake } from '$types';

const directions: { [key: string]: Coords } = {
    Up: { x: 0, y: -1 },
    Down: { x: 0, y: 1 },
    Left: { x: -1, y: 0 },
    Right: { x: 1, y: 0 },
};

/** Array of the pixels in the snake's body */
export const snake = store<Coords[]>([]) as Snake;
snake.$ = [{ x: 0, y: 0 }]

/** Snake direction arguments [x,y] */
snake.direction = store<Coords>() as Snake["direction"];
snake.direction.set = (dir: string) => {
    snake.direction.$ = directions[dir];
};

/** Snake's head coords */
snake.head = store<Coords>() as Snake["head"];
snake.head.move = () => {
    snake.head.$ = {
        x: snake.head.$.x + snake.direction.$.x,
        y: snake.head.$.y + snake.direction.$.y,
    };
};

snake.init = () => {
    score.$ = 0;
    snake.head.$ = snake.$[0];
    snake.direction.$ = directions.Right;
    snake.head.move();
};

/** Set if snake should grove on next move */
snake.makeLonger = store(false);
snake.moveBody = () => {
    const body = [...snake.$];
    body.unshift(snake.head.$);
    if (!snake.makeLonger.$) {
        body.pop();
    } else {
        snake.makeLonger.$ = false;
    }
    snake.$ = body;
};

/** Check if specified coords is in the snake's body array */
snake.isPixelInBody = (x, y) => {
    return snake.$.some((bodyPixel) => bodyPixel?.x === x && bodyPixel?.y === y);
};