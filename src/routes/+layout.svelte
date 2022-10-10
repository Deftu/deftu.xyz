<script lang="ts">
	// Styling
	import "../app.css";

	// Primary components
	import Footer from "$lib/nav/Footer.svelte";
</script>

<main>
	<slot />
</main>
<Footer />

<style>
	:global(html, body) {
		--primary: #990000;
		--text-light: #DBD7D2;
		--background-dark: #151316;
	}

	:global(html) {
		scroll-behavior: smooth;
		scrollbar-width: none;
	}

	:global(html::-webkit-scrollbar) {
		display: none;
	}

	:global(body) {
		background-color: var(--background-dark);
	}
</style>
