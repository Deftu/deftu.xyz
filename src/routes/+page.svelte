<script>
	import Metadata from "$lib/Metadata.svelte";
</script>

<Metadata title="Deftu" description="Deftu's official info center! Find out more about Deftu and his projects." />

<section class="branding">
    <div class="content">
        <img class="logo" src="/branding/logo.png" alt="Logo" />
        <div class="brand-info">
            <div class="brand">
                <h1 class="title">Deftu</h1>
                <h2 class="subtitle"><span>Developer</span>, <span>Designer</span>, <span>Creator</span></h2>
                <p class="description">
                    Creating your favourite technology elegantly and efficiently, with a touch of style. - Also building a safer and more secure internet for everyone. <br>
                    <a href="/about">Learn more about me...</a>
                </p>
            </div>

            <p class="miscellaneous">
                Looking for other links? <br>
                <a href="https://docs.deftu.xyz/" target="_blank" rel="noopener noreferrer">Documentation</a> |
                <a href="https://github.com/Deftu" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="https://twitter.com/DeftuDev" target="_blank" rel="noopener noreferrer">Twitter</a> |
                <a href="https://shr.deftu.xyz/discord" target="_blank" rel="noopener noreferrer">Discord</a> |
                <a href="https://ko-fi.com/Deftu" target="_blank" rel="noopener noreferrer">Ko-Fi</a>
            </p>
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

    .branding {
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

    .logo {
        width: 256px;
        height: 256px;
        object-fit: cover;
        background-color: var(--background-4);
        border-radius: 15px;
    }

    .brand-info, .brand {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
    }

    .brand-info {
        gap: 25px;
    }

    .miscellaneous {
        font-size: 20px;
        font-weight: 400;
        color: var(--text);
    }

    .title {
        font-size: 55px;
        font-weight: 800;
        color: var(--text);
    }

    .subtitle,
    .subtitle > * {
        font-size: 30px;
        font-weight: 600;
        color: var(--text-faded);
    }

    .description {
        font-size: 20px;
        font-weight: 400;
        color: var(--text);
    }

    .description a {
        color: var(--text-faded);
        text-decoration: none;
        transition: color 0.15s ease-out;
    }

    .description a:hover {
        color: var(--text);
        transition: color 0.15s ease-out;
    }

    @media (max-width: 768px) {
        .content {
            flex-direction: column;
            gap: 20px;
            padding: 0 20px;
        }

        .logo {
            width: 175px;
            height: 175px;
        }

        .brand-info, .brand {
            align-items: center;
        }

        .brand-info {
            gap: 15px;
        }

        .title {
            font-size: 45px;
        }

        .subtitle,
        .subtitle > * {
            font-size: 30px;
            text-align: center;
        }

        .description {
            font-size: 20px;
            text-align: center;
        }

        .miscellaneous {
            text-align: center;
        }
    }
</style>
