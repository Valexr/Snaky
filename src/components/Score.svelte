<script lang="ts" context="module">
    import { score, speed, stop, isPlaying } from "$lib/game";
</script>

<header id="scoreboard">
    <h3>Score: {$score}</h3>
    <h1>
        Snaky
        {#if $isPlaying}
            <button id="stop" on:click={stop}>⏹</button>
        {/if}
    </h1>
    <h3>Speed: {$speed}</h3>
</header>

<style>
    #stop {
        cursor: pointer;
        position: relative;
        vertical-align: middle;
        box-shadow: var(--shadow);
        background-color: var(--dark);
        color: var(--primary);
        border: 0;
    }
    #stop:active {
        top: 2px;
        left: 2px;
        box-shadow: none;
    }
</style>
