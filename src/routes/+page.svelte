<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Metadata from "$lib/Metadata.svelte";
</script>

<Metadata title="Deftu" description="Deftu's official website, get more info here!" />

<div class="content">
	<div class="title-wrapper">
		<h1 class="title branding">Deftu</h1>
		<h2 class="description">Passionate, ambitious and bright software developer.</h2>
		<ul class="titles">
			<li><h3>Owner @ <a href="https://unifycraft.xyz/" class="unifycraft branding">UnifyCraft</a></h3></li>
			<li><h3>Owner @ <a href="https://uniloader.unifycraft.xyz/" class="unifycraft branding">UniLoader</a></h3></li>
			<li><h3>Developer @ <a href="https://github.com/100MediaFabric" class="branding">100Media</a></h3></li>
		</ul>
	</div>
</div>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: var(--text);
		text-align: center;
		width: 100vw;
		min-height: 100vh;
	}

	.title {
		margin: 0;
		padding: 0;
	}

	.description {
		padding: 0;
		margin: 0;
		margin-top: 25px;
		margin-bottom: 30px;
	}

	.titles {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.titles > li > h3 {
		margin: 0;
		padding: 0;
	}

	.unifycraft {
		color: #2A628F;
	}
</style>
