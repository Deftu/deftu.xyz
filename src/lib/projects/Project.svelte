<script lang="ts">
	export let name: string;
    export let description: string;
    export let url: string | null = null;
    export let wip: boolean = false;
</script>

<div class="project-card">
    <div class="project-card-header">
        {#if url}
        <a href={url}><h2 class="project-card-title">{name}</h2></a>
        {:else}
        <h2 class="project-card-title">{name}</h2>
        {/if}
        {#if wip}
        <span class="wip">WIP</span>
        {/if}
    </div>
    <div class="project-card-content">
        <p class="project-card-description">{description}</p>
    </div>
</div>

<style>
    .project-card {
        background-color: var(--background-2);
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
        .project-card {
            min-width: 350px;
            max-width: 350px;
        }
    }

    .project-card-header {
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

    .project-card-content {
        padding: 15px;
    }

    .project-card-title, .project-card-description {
        margin: 0;
        padding: 0;
    }
</style>
