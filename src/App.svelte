<script lang="ts" context="module">
    import Field from "$components/Field.svelte";
    import Score from "$components/Score.svelte";
    import { start, isPlaying } from "$lib/game";
</script>

<main>
    <Score />
    <Field />
    {#if !$isPlaying}
        <button id="start" on:click={start}>Start</button>
    {/if}
</main>

<style>
    @import "app.css";

    #start {
        position: absolute;
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
