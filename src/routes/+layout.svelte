<script lang="ts">
	// Styling
	import "../app.css";

	// Primary components
    import ThemePicker from "$lib/ThemePicker.svelte";
	import Footer from "$lib/nav/Footer.svelte";
</script>

<ThemePicker />
<main>
	<slot />
</main>
<Footer />
