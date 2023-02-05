<script lang="ts" context="module">
    import { field, isPlaying } from "$lib/game";
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

        area.isConnected && RO.observe(area);

        const keyboardHandler = (e: KeyboardEvent) => {
            if (e.key.includes("Arrow")) {
                const direction = e.key.replace("Arrow", "");
                snake.setDirection(direction);
            }
        };
        const clickHandler = (e: ClickEvent) => {
            if (!$isPlaying) return;
            const { dataset } = e.target;
            if (Object.keys(dataset).length) {
                const axis = !snake.direction.x ? "x" : "y";
                const back = Number(dataset[axis]) < snake.head[axis];
                const vert = back ? "Up" : "Down";
                const horz = back ? "Left" : "Right";
                const direction = axis === "x" ? horz : vert;

                snake.setDirection(direction);
            }
        };

        window.onkeydown = (e) => keyboardHandler(e);
        area.onclick = (e) => clickHandler(e as ClickEvent);

        return {
            destroy() {
                RO.disconnect();
            },
        };
    }
</script>

<section
    id="field"
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
