<script lang="ts">
    import {
        browser
    } from "$app/environment";

	export let title: string;
    export let description: string;

    const url = browser ? window?.location?.href : "";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="og:title" content={title} />
	<meta name="twitter:title" content={title} />

    <meta name="description" content={description} />
	<meta name="og:description" content={description} />
	<meta name="twitter:description" content={description} />

    <meta name="og:url" content={url} />
    <meta name="twitter:url" content={url} />
</svelte:head>
