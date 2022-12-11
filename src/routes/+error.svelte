<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
    import Metadata from "$lib/Metadata.svelte";
    import {
        page
    } from "$app/stores";
</script>

<Metadata title={$page.status.toString()} description=${$page.error?.message} />

<div class="wrapper">
    <h1 class="title">{$page.status}</h1>
    <p class="subtitle">{$page.error?.message}</p>
    <a href="/">Take me home...</a>
</div>

<style>
    .wrapper {
        min-height: 100%;
        text-align: center;
        color: var(--text);
        padding: 0;
        margin: 0;
    }

	.title {
		font-size: 60px;
		font-weight: bold;
	}

	.subtitle {
		font-size: 35px;
    }

    a {
        font-size: 15px;
        cursor: pointer;
    }
</style>
