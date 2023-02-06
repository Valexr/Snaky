<script lang="ts" context="module">
    import { apple } from "$lib/apple";
    import { equal } from "$lib/utils";
    import type { Cell } from "$types";
</script>

<script lang="ts">
    export let pixel: Cell;
    export let filled: Cell[];
</script>

<span
    data-x={pixel.x}
    data-y={pixel.y}
    class="pixel"
    class:fill={filled.some((field) => equal(field, pixel))}
    class:apple={equal(pixel, $apple)}
/>
