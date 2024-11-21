<script lang="ts" module>
    import { apple } from "$lib/apple";
    import { equal } from "$lib/utils";
    import type { Cell } from "$types";
</script>

<script lang="ts">
    let { pixel, filled }: { pixel: Cell; filled: Cell[] } = $props();
</script>

<span
    data-x={pixel.x}
    data-y={pixel.y}
    class="pixel"
    class:fill={filled.some((field) => equal(field, pixel))}
    class:apple={equal(pixel, $apple)}
></span>
