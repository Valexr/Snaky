<script lang="ts" module>
    import { game } from "$lib/game";
    import gh from "../svg/gh.svg";
    import type { Name, Repository } from "$types";

    interface Props {
        name: Name;
        repository: Repository;
    }
</script>

<script lang="ts">
    let { name, repository }: Props = $props();
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
