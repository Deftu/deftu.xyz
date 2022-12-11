<script lang="ts">
    import Metadata from "$lib/Metadata.svelte";
    import Project from "$lib/projects/Project.svelte";
</script>

<Metadata title="Deftu - Projects" description="A list of all the projects I've worked on." />

<section class="projects">
    <div class="content">
        <div class="projects-info">
            <h1 class="title">Projects</h1>
            <ul class="project-list">
                <li><Project name="Deftbin" url="https://deftb.in/" description="A code sharing web application made as an alternative to Hastebin/Pastebin." /></li>
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

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--text);
        text-align: center;
        width: 100%;
        padding: 40px;
    }

    .projects-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .project-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding: 0;
        flex-wrap: wrap;
    }

    .title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
</style>
