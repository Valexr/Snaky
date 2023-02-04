<script lang="ts" context="module">
    import { score, speed } from "$lib/game";
</script>

<header id="scoreboard">
    <h3>Score: {$score}</h3>
    <h1>Snaky</h1>
    <h3>Speed: {$speed}</h3>
</header>

<style>
    #scoreboard {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
    }
    #scoreboard > * {
        margin: 0;
        padding: 0;
    }
</style>
