<script lang="ts" context="module">
    import { field, state } from "$lib/game";
    import { snake } from "$lib/snake";
    import { apple } from "$lib/apple";
    import Pixel from "$components/Pixel.svelte";

    type ClickEvent = MouseEvent & {
        target: EventTarget & { dataset: DOMStringMap };
    };
</script>

<script lang="ts">
    function controls(area: HTMLElement) {
        const RO = new ResizeObserver(([{ contentRect }]) => {
            const { width, height } = contentRect;
            const cell = $field.cell + $field.gap;
            field.set({
                width: Math.round(width / cell),
                height: Math.round(height / cell),
                part: $field.part,
                cell: $field.cell,
                gap: $field.gap,
            });
        });

        RO.observe(area);

        window.onkeydown = (e) => keyboardHandler(e);
        area.onclick = (e) => clickHandler(e as ClickEvent);

        function keyboardHandler(e: KeyboardEvent) {
            if (e.key.includes("Arrow")) {
                const side = e.key.replace("Arrow", "");
                snake.direct(side);
            }
        }
        function clickHandler(e: ClickEvent) {
            if ($state === "stop" || $state === "pause") return;
            const { dataset } = e.target;
            if (Object.keys(dataset).length) {
                const axis = !snake.direction.x ? "x" : "y";
                const back = Number(dataset[axis]) < snake.head[axis];
                const vert = back ? "Up" : "Down";
                const horz = back ? "Left" : "Right";
                const side = axis === "x" ? horz : vert;

                snake.direct(side);
            }
        }

        return {
            destroy() {
                RO.disconnect();
            },
        };
    }
</script>

<section
    id="field"
    class:full={$field.part === 1}
    use:controls
    style="
        --cols: {$field.width}; 
        --part: {$field.part}; 
        --cell: {$field.cell}px; 
        --gap: {$field.gap}px
        "
>
    {#each { length: $field.height } as _, row}
        {#each { length: $field.width } as _, col}
            <Pixel pixel={{ x: col, y: row }} filled={[...$snake, $apple]} />
        {/each}
    {/each}
</section>
