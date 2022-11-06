<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Metadata from "$lib/Metadata.svelte";
	import Links from "$lib/nav/Links.svelte";
    import Project from "$lib/projects/Project.svelte";
</script>

<Metadata title="Deftu" description="Deftu's official website, get more info here!" />

<section>
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
</section>
<section>
    <div class="projects">
        <Project name="CrashBrander" url="https://modrinth.com/mod/crashbrander" description="Small mod which adds your (modpack) branding to crash reports, useful for debugging!" />
        <Project name="Screencapper" url="https://modrinth.com/mod/screencapper" description="A highly advanced screenshot improvement mod." />
        <Project name="Noteable" url="https://modrinth.com/mod/noteable" description="Adds (sticky) notes to the game! " />
        <Project name="DeftuLib" url="https://modrinth.com/mod/deftulib" description="Small library for Deftu's mods. " />
        <Project name="Deftu's Download Counter" url="https://github.com/Deftu/DeftuDownloadCounter" description="A self-hostable Discord bot which tracks download milestones." />
        <Project name="OofMod" url="https://modrinth.com/mod/oofmod" description="A PvP mod for 1.8.9 which plays a sound upon an action." />
    </div>
</section>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
	}

	section {
		width: 100%;
		height: 100vh;
	}

	.content, .projects {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: var(--text);
		text-align: center;

		width: 100%;
		min-height: 100vh;
	}

    .projects {
        justify-content: inherit;
        flex-direction: row;
        flex-wrap: wrap;
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
