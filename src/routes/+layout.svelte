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
	:global(html) {
		--primary: #C91212;
		--text: #151316;
		--background: #F3F3F0;
	}

	:global(.dark-mode) {
		--text: #F3EFE0;
		--background: #151316;
	}

	:global(html) {
		scroll-behavior: smooth;
		scrollbar-width: none;
	}

	:global(html::-webkit-scrollbar) {
		display: none;
	}

	:global(body) {
		background-color: var(--background);
	}
</style>
