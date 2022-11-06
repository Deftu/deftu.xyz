<script lang="ts">
	export let name: string;
    export let description: string;
    export let url: string | null = null;
</script>

<div class="card">
    <div class="card-content">
        {#if url}
            <a href={url}><h2 class="card-title">{name}</h2></a>
        {:else}
            <h2 class="card-title">{name}</h2>
        {/if}
        <p class="card-description">{description}</p>
    </div>
</div>

<style>
    .card {
        background-color: var(--background-variant);
        color: var(--text);
        border-radius: 15px;
        padding: 10px;
        margin: 10px;
        box-shadow: 0 0 10px 0 var(--shadow);
        max-width: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-content {
        padding: 15px;
    }

    .card-title, .card-description {
        margin: 0;
        padding: 0;
    }
</style>
