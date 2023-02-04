<script lang="ts" context="module">
    import { fieldSize, isPlaying } from "$lib/game";
    import { snake } from "$lib/snake";
    import { apple } from "$lib/apple";
    import Pixel from "$components/Pixel.svelte";
    import type { Coords } from "$types";

    type ClickEvent = MouseEvent & {
        target: EventTarget & { dataset: DOMStringMap };
    };
</script>

<script lang="ts">
    function controls(field: HTMLElement) {
        const RO = new ResizeObserver(([{ contentRect }]) => {
            const { width, height } = contentRect;
            fieldSize.set({
                width: Math.round(width / 18.5),
                height: Math.round(height / 18.5),
            });
        });

        field.isConnected && RO.observe(field);

        const keyboardHandler = (e: KeyboardEvent) => {
            if (e.key.includes("Arrow")) {
                const direction = e.key.replace("Arrow", "");
                snake.direction.set(direction);
            }
        };
        const clickHandler = (e: ClickEvent) => {
            if (!$isPlaying) return;
            const { dataset } = e.target;
            if (Object.keys(dataset).length) {
                const axis = snake.direction.$.x === 0 ? "x" : "y";
                const back = Number(dataset[axis]) < snake.head.$[axis];
                const vert = back ? "Up" : "Down";
                const horz = back ? "Left" : "Right";
                const direction = axis === "x" ? horz : vert;

                snake.direction.set(direction);
            }
        };

        window.onkeydown = (e) => keyboardHandler(e);
        field.onclick = (e) => clickHandler(e as ClickEvent);

        return {
            destroy() {
                RO.disconnect();
            },
        };
    }

    let filledBySnake: Coords[] = [];
    snake.$$((pixels) => {
        if (pixels) filledBySnake = pixels;
    });

    let filledByApple: Coords[] = [];
    apple.$$((pixel) => {
        if (pixel) filledByApple = [pixel];
    });

    let filledPixels: Coords[] = [];
    $: filledPixels = [...filledBySnake, ...filledByApple];
</script>

<section id="field" use:controls style="--cols: {$fieldSize.width}">
    {#each { length: $fieldSize.height } as _, row}
        {#each { length: $fieldSize.width } as _, col}
            <Pixel x={col} y={row} filled={filledPixels} />
        {/each}
    {/each}
</section>

<style>
    #field {
        display: grid;
        grid-template-columns: repeat(var(--cols), 1rem);
        grid-auto-rows: minmax(1rem, auto);
        gap: 0.15rem;
        inset: 3rem 1rem 1rem;
        position: absolute;
        user-select: none;
        pointer-events: auto;
        --webkit-user-select: none;
    }
</style>
