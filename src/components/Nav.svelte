<script lang="ts" context="module">
    import { start, stop, speed, field, playing } from "$lib/game";
    import { snake } from "$lib/snake";
</script>

<script lang="ts">
    let sizes = [
        ["full", 1],
        ["half", 1.5],
        ["quart", 2],
    ];

    function snakeLength(e: any) {
        if ($snake.length < e.target.value) {
            snake.unshift({ x: e.target.value - 1, y: 0 });
        } else {
            snake.pop();
        }
    }
</script>

<nav class:playing={$playing}>
    {#if $playing}
        <button on:click={stop}>Pause</button>
        <button on:click={stop}>Stop</button>
    {:else}
        <button class="lg" on:click={start}>Start</button>
        <fieldset>
            <label>
                Speed
                <input
                    type="number"
                    bind:value={$speed}
                    min="1"
                    max="10"
                    maxlength="2"
                    size="3"
                />
            </label>
            <label>
                Snake
                <input
                    type="number"
                    value={$snake.length}
                    on:input={snakeLength}
                    min="1"
                    max="10"
                    maxlength="2"
                    size="3"
                />
            </label>
            <label>
                Cell
                <input
                    type="number"
                    bind:value={$field.cell}
                    min="5"
                    max="100"
                    maxlength="2"
                    size="3"
                />
            </label>
            <label>
                Field
                <select bind:value={$field.part}>
                    {#each sizes as [size, value]}
                        <option {value}>{size}</option>
                    {/each}
                </select>
            </label>
        </fieldset>
    {/if}
</nav>
