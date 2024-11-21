<script lang="ts" module>
    import Score from "$components/Score.svelte";
    import Field from "$components/Field.svelte";
    import Nav from "$components/Nav.svelte";
    import type { Name, Repository } from "$types";

    interface Props {
        name: Name;
        repository: Repository;
    }
</script>

<script lang="ts">
    let { name, repository }: Props = $props();
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
