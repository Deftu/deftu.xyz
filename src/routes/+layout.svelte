<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import "../app.css";
    import {
        NavBar,
        Footer
    } from "$lib/nav";
</script>

<NavBar />
<main>
	<slot />
</main>
<Footer />

<style>
    main {
        flex: 1;
    }
</style>
