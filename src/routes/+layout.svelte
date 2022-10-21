<script lang="ts">
	// Styling
	import "../app.css";

	// Primary components
	import Header from "$lib/nav/Header.svelte";
	import Footer from "$lib/nav/Footer.svelte";
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
