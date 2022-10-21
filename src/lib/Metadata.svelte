<script lang="ts">
	export let title: string;
    export let description: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="og:title" content={title} />
	<meta name="twitter:title" content={title} />

    <meta name="description" content={description} />
	<meta name="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<meta name="theme-color" content="#C91212" />
</svelte:head>
