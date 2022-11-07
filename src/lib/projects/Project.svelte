<script lang="ts">
	export let name: string;
    export let description: string;
    export let url: string | null = null;
    export let wip: boolean = false;
</script>

<div class="card">
    <div class="card-header">
        {#if url}
        <a href={url}><h2 class="card-title">{name}</h2></a>
        {:else}
        <h2 class="card-title">{name}</h2>
        {/if}
        {#if wip}
        <span class="wip">WIP</span>
        {/if}
    </div>
    <div class="card-content">
        <p class="card-description">{description}</p>
    </div>
</div>

<style>
    .card {
        background-color: var(--background-variant);
        color: var(--text);
        border-radius: 15px;
        margin: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
        min-width: 450px;
        max-width: 450px;
        min-height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 525px) {
        .card {
            min-width: 350px;
            max-width: 350px;
        }
    }

    .card-header {
        display: flex;
        width: 100%;
        padding: 0;
        margin: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .wip {
        font-size: 20px;
    }

    .card-content {
        padding: 15px;
    }

    .card-title, .card-description {
        margin: 0;
        padding: 0;
    }
</style>
