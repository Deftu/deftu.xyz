<script lang="ts">
	import Metadata from "$lib/Metadata.svelte";
    import {
        DiscordIcon,
        GitHubIcon,
        TwitterIcon,
    } from "$lib/icons";
</script>

<Metadata title="Deftu - Contact" description="Want to get in touch with Deftu? This page shows you where and how!" />

<section class="contact">
    <div class="content">
        <div class="contact-info">
            <h1 class="title">Contact</h1>
            <p class="description">
                Feel free to contact me on any of the platforms below. I'm always happy to help! Though, please refrain from bothering me all too much if I appear to be busy or not responding.
                <br>
                <br>
                I'm not always available, and I do have a life outside of the internet, as well as work to do.
            </p>
            <div class="contact-links">
                <a href="https://twitter.com/DeftuDev" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon class="social-logo logo-twitter" />
                </a>
                <a href="https://github.com/Deftu" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon class="social-logo logo-github" />
                </a>
                <a href="https://shr.deftu.xyz/discord" target="_blank" rel="noopener noreferrer">
                    <DiscordIcon class="social-logo logo-discord" />
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    :global(main) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        width: 100%;
        padding: 0 40px;
        max-width: 1050px;
    }

    .description {
        max-width: 500px;
        text-align: center;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .contact-links {
        display: flex;
        gap: 20px;
    }

    :global(.social-logo) {
        width: 48px;
        height: 48px;
        object-fit: cover;
    }

    :global(.logo-twitter) {
        fill: #1DA1F2;
    }

    :global(.logo-github) {
        fill: var(--text);
    }

    :global(.logo-discord) {
        fill: #7289DA;
    }
</style>
