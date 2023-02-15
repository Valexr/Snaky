<script lang="ts" context="module">
    import { game } from "$lib/game";
    import gh from "../svg/gh.svg";
    import type { Name, Repository } from "$types";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;
</script>

<header id="scoreboard">
    <h3>Score: {$game.score}</h3>
    <h1>
        <a href={repository.url} target="_blank" rel="noreferrer" id="gh">
            {@html gh}
        </a>
        {name}
    </h1>
    <h3>Speed: {$game.speed}</h3>
</header>
