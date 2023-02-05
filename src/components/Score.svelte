<script lang="ts" context="module">
    import { score, speed, stop, isPlaying } from "$lib/game";
</script>

<header id="scoreboard">
    <h3>Score: {$score}</h3>
    <h1>
        <a
            href="https://github.com/Valexr/Snaky"
            target="_blank"
            rel="noreferrer"
            id="gh">&nbsp;</a
        >
        {#if $isPlaying}
            <button id="stop" on:click={stop}>Stop</button>
        {:else}
            Snaky
        {/if}
    </h1>
    <h3>Speed: {$speed}</h3>
</header>
