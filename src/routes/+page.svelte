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
            <h3 class="more-content">Click <a href="/about">here</a> if you'd like to learn more.</h3>
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
        <h1 class="title section-title">Projects</h1>
        <ul class="project-list">
            <li><Project name="CrashBrander" url="https://modrinth.com/mod/crashbrander" description="Small mod which adds your (modpack) branding to crash reports, useful for debugging!" /></li>
            <li><Project name="Screencapper" url="https://modrinth.com/mod/screencapper" description="A highly advanced screenshot improvement mod." /></li>
            <li><Project name="Noteable" url="https://modrinth.com/mod/noteable" description="Adds (sticky) notes to the game! " /></li>
            <li><Project name="DeftuLib" url="https://modrinth.com/mod/deftulib" description="Small library for Deftu's mods. " /></li>
            <li><Project name="Deftu's Download Counter" url="https://github.com/Deftu/DeftuDownloadCounter" description="A self-hostable Discord bot which tracks download milestones." /></li>
            <li><Project name="QuickSocket" url="https://github.com/Deftu/QuickSocket" description="Library used for handling websocket connections in Kotlin and Java." /></li>
            <li><Project name="FileDownloader" url="https://github.com/Deftu/FileDownloader" description="Simple library used to handle file downloads in the JVM." /></li>
            <li><Project name="CraftProcessor" url="https://github.com/Deftu/CraftProcessor" description="A Discord bot which scans Minecraft logs and crash reports to find potential solutions." wip /></li>
            <li><Project name="Deftils" url="https://github.com/Deftu/Deftils" description="JVM core library adding a multitude of small utilities regarding collections and data manipulation." /></li>
            <li><Project name="OofMod" url="https://modrinth.com/mod/oofmod" description="A PvP mod for 1.8.9 which plays a sound upon an action." /></li>
        </ul>
    </div>
</section>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
	}

	section {
		width: 100%;
		min-height: 100vh;
	}

    .section-title {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text);
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
        flex-direction: column;
        margin: 0 0 30px 0;
    }

    .title-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

	.title {
		margin: 0;
		padding: 0;
	}

	.description {
        max-width: 75%;
		padding: 0;
        margin: 25px 15px 10px 15px;
	}

    .more-content {
        padding: 0;
        margin: 5px 15px 30px 15px;
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

    .project-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>
