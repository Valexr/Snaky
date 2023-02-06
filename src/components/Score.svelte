<script lang="ts" context="module">
    import { score, speed } from "$lib/game";
    import gh from "../svg/gh.svg";

    let doc = new DOMParser().parseFromString(gh, "application/xml");
    let node = document.importNode(doc.documentElement, true);
    console.log(node);
</script>

<header id="scoreboard">
    <h3>Score: {$score}</h3>
    <h1>
        <a
            href="https://github.com/Valexr/Snaky"
            target="_blank"
            rel="noreferrer"
            id="gh">{@html gh}</a
        >
        Snaky
    </h1>
    <h3>Speed: {$speed}</h3>
</header>
