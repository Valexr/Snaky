<script lang="ts" context="module">
    import Score from "$components/Score.svelte";
    import Field from "$components/Field.svelte";
    import Start from "$components/Start.svelte";
    import { isPlaying } from "$lib/game";
</script>

<main>
    <Score />
    <Field />
    {#if !$isPlaying}
        <Start />
    {/if}
</main>

<style>
    @import "app.css";
</style>
