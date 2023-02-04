<script lang="ts" context="module">
    import type { Coords } from "$types";
</script>

<script lang="ts">
    export let x: number;
    export let y: number;
    export let filled: Coords[] = [];

    let fill = false;

    $: if (filled) fill = filled.some((f) => f.x === x && f.y === y);
</script>

<span data-x={x} data-y={y} class="pixel" class:fill />

<style>
    .pixel {
        background-color: var(--secondary);
    }
    .pixel:active {
        box-shadow: var(--shadow);
    }
    .fill {
        background-color: var(--dark);
        box-shadow: var(--shadow);
    }
</style>
