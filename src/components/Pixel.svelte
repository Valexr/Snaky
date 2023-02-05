<script lang="ts" context="module">
    import { equal } from "$lib/utils";
    import type { Coords } from "$types";
</script>

<script lang="ts">
    export let pixel: Coords;
    export let filled: Coords[] = [];
</script>

<span
    data-x={pixel.x}
    data-y={pixel.y}
    class="pixel"
    class:fill={filled.some((field) => equal(field, pixel))}
/>
