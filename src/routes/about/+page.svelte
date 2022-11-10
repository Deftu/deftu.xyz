<script context="module" lang="ts">
    export const prerender = true;
</script>

<script>
    import Metadata from "$lib/Metadata.svelte";
</script>

<Metadata title="Deftu - About Me" description="Learn more about Deftu here." />

<section>
    <div class="content">
        <div class="sub-content">
            <h1 class="title branding">Deftu</h1>
            <h2 class="description">Hello! I'm <span class="branding">Deftu</span>. I'm a professional full-stack software developer mostly specializing in server software and Minecraft modding.</h2>
            <h2 class="description">I work with some of the biggest names in Minecraft modding! It's something I truly enjoy doing and I do not plan on stopping any time soon.</h2>
            <h2 class="description">As for me personally - I enjoy streaming myself gaming and working, taking care of various animals and working with various kinds of technology.</h2>
        </div>
        <div class="sub-content working-description">
            <h2 class="description">I'm also the owner of <a href="https://enhancedpixel.xyz/" class="enhancedpixel branding">EnhancedPixel</a>, a Minecraft modding organization.</h2>
            <h2 class="description">I'm also currently working hard on <a href="https://spruceloader.xyz/" class="spruce branding">Spruce Loader</a>, an advanced Minecraft mod loader with support for both Fabric and Quilt mods alongside it's own.</h2>
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
        min-height: 100vh;
    }

    .sub-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 25px 0 25px 0;
    }

    .title {
        margin: 0;
        padding: 0;
    }

    .description {
        max-width: 75%;
        margin: 15px 0 15px 0;
        padding: 0;
    }

    .sub-content > .description {
        margin: 10px 0 10px 0;
    }

    .working-description {
        margin: 30px 0 0 0;
    }

    .working-description > .description {
        margin: 5px 0 5px 0;
    }
</style>
