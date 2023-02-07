<script lang="ts" context="module">
    import { game } from "$lib/game";
    import gh from "../svg/gh.svg";
</script>

<header id="scoreboard">
    <h3>Score: {$game.score}</h3>
    <h1>
        <a
            href="https://github.com/Valexr/Snaky"
            target="_blank"
            rel="noreferrer"
            id="gh"
        >
            {@html gh}
        </a>
        Snaky
    </h1>
    <h3>Speed: {$game.speed}</h3>
</header>
