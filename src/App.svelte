<script lang="ts" context="module">
    import Score from "$components/Score.svelte";
    import Field from "$components/Field.svelte";
    import Nav from "$components/Nav.svelte";
    import type { Name, Repository } from "$types";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Score {name} {repository} />
<main>
    <Field />
</main>
<footer>
    <Nav />
</footer>

<style>
    @import "app.css";
</style>
