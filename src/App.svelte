<script lang="ts" context="module">
    import Field from "$components/Field.svelte";
    import Score from "$components/Score.svelte";
    import { start, isPlaying, speed } from "$lib/game";
    import { snake } from "$lib/snake";
</script>

<script lang="ts">
    function snakeSpeed(e: any) {
        speed.$ = e.target.value;
    }
    function snakeLength(e: any) {
        snake.$.unshift({ x: -1 + e.target.value, y: 0 });
    }
</script>

<main>
    <Score />
    <Field />
    {#if !$isPlaying}
        <nav>
            <button id="start" on:click={start}>Start</button>
            <fieldset>
                <label>
                    Speed
                    <input
                        type="number"
                        value={$speed}
                        on:input={snakeSpeed}
                        min="1"
                        max="10"
                        size="2"
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
                        size="2"
                    />
                </label>
            </fieldset>
        </nav>
    {/if}
</main>

<style>
    @import "app.css";

    nav {
        color-scheme: dark;
        position: absolute;
        left: calc(50% - 150px);
        top: calc(50% - 25px);
        display: flex;
        flex-flow: column nowrap;
        width: 300px;
    }
    fieldset {
        display: flex;
        justify-content: space-between;
        border: 0;
        margin: 0;
        padding: 1rem 0;
    }
    input {
        border: 0;
        padding: 0.25rem;
        color: var(--primary);
        background-color: var(--dark);
    }
    #start {
        left: calc(50% - 150px);
        top: calc(50% - 25px);
        cursor: pointer;
        height: 50px;
        width: 300px;
        border: none;
        font-size: 2rem;
        font-family: inherit;
        color: var(--primary);
        background-color: var(--dark);
        box-shadow: var(--shadow-lg);
    }
</style>
