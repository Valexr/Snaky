<script lang="ts" context="module">
    import { score, speed, stop, isPlaying } from "$lib/game";
</script>

<header id="scoreboard">
    <h3>Score: {$score}</h3>
    <h1>
        {#if $isPlaying}
            <button id="stop" on:click={stop}>Stop</button>
        {:else}
            Snaky
        {/if}
    </h1>
    <h3>Speed: {$speed}</h3>
</header>
