<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Metadata from "$lib/Metadata.svelte";
	import Links from "$lib/nav/Links.svelte";
</script>

<Metadata title="Deftu" description="Deftu's official website, get more info here!" />

<div class="content">
	<div class="title-wrapper">
		<h1 class="title branding">Deftu</h1>
		<h2 class="description">Passionate, ambitious and bright software developer.</h2>
		<ul class="titles">
			<li><h3>Owner @ <a href="https://enhancedpixel.xyz/" class="enhancedpixel branding">EnhancedPixel</a></h3></li>
			<li><h3>Owner @ <a href="https://spruceloader.xyz/" class="spruce branding">Spruce Loader</a></h3></li>
			<li><h3>Developer @ <a href="https://100media.us/" class="branding">100Media</a></h3></li>
		</ul>
	</div>
	<Links />
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
		margin-top: 25px;
		margin-bottom: 30px;
        margin-left: 15px;
        margin-right: 15px;
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

	.enhancedpixel {
		color: #4E6AD0;
	}

    .spruce {
        color: #3F785F;
    }
</style>
