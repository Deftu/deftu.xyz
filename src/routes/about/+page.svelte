<script lang="ts">
	import Metadata from "$lib/Metadata.svelte";
</script>

<Metadata title="Deftu - About" description="Learn more about Deftu and his interests, passions and mission." />

<section class="about">
    <div class="content">
        <div class="branding-container">
            <section class="brand">
                <img class="logo" src="/branding/logo.png" alt="Logo" />
                <h1 class="title">Deftu</h1>
            </section>
            <section class="info">
                <ol>
                    <li>
                        <h2>Pronouns</h2>
                        <p>He/Him/They/Them</p>
                    </li>
                    <li>
                        <h2>Age</h2>
                        <p>16</p>
                    </li>
                    <li>
                        <h2>Location</h2>
                        <p>South Africa</p>
                    </li>
                </ol>
            </section>
        </div>
        <div class="about-text">
            <h1 class="title">My personal life</h1>
            <p class="text-content">
                I'm a 16 year old developer originating in South Africa.
                I have a passion for technology and love to create things, being a self-taught developer and designer.
                With over three years of experience, I have a good understanding and have a firm grasp on the field itself and believe I can do great things.
            </p>

            <h1 class="title">Experience</h1>
            <h2 class="subtitle">Programming</h2>
            <p class="text-content">
                I have been programming for well over 3 years now, having started out with Java, HTML, CSS and JavaScript.
                Since I started my journey, I have taken on many different projects, allowing myself to grow my knowledge and skills to the best of my ability.
                <br>
                I personally believe that I have come to a point where I can work professionally in this field and can create great things which can really help people.
            </p>

            <h2 class="subtitle">Design</h2>
            <p class="text-content">
                I have been designing for over a year now, primarily using Figma.
                <br>
                Considering my primary focus is programming, I have not had all too much time to practice and hone my skills, though I've managed to improve greatly and make truly inspiring designs.
            </p>

            <h1 class="title">Interests</h1>
            <p class="text-content">
                I find great interest in a variety of many things, such as:
            </p>
            <ul>
                <li>Technology</li>
                <li>Music</li>
                <li>Design</li>
                <li>Voice acting</li>
                <li>Script writing</li>
                <li>Gaming</li>
                <li>Art</li>
                <li>Community moderation</li>
            </ul>

            <h1 class="title">Mission</h1>
            <p class="text-content">
                My mission is to create a safer and more secure internet, while also creating great technology for everyone to use. I want to make the internet a better place for everyone, and I believe that I can do that.
                <br>
                I also intend on making the world a better place for those in the LGBTQIA+ community, as I am deeply passionate about the community as I am a part of it myself and have had to fall victim to discrimination and hate.
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

    .about {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        width: 100%;
        height: 100%;
        padding: 40px;
    }

    .branding-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 25px;
        height: 100%;
        border-radius: 10px;
        background-color: var(--background-3);
    }

    .branding-container section {
        width: 100%;
    }

    .branding-container section::after {
        content: "";
        display: block;
        width: 100%;
        height: 2.5px;
        background-color: var(--background-4);
    }

    .branding-container section:last-child::after {
        display: none;
    }

    .brand {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .logo {
        width: 256px;
        height: 256px;
        object-fit: cover;
        background-color: var(--background-4);
        border-radius: 15px;
    }

    .title {
        font-size: 2.5rem;
        font-weight: 600;
    }

    .subtitle {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .text-content {
        font-size: 1.25rem;
        font-weight: 400;
    }

    .branding-container .info {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        gap: 10px;
    }

    ol {
        list-style-type: none;
        margin-left: 20px;
    }

    .about-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        max-width: 1050px;
        width: 100%;
        background-color: var(--background-3);
        border-radius: 10px;
        padding: 25px;
    }

    .title {
        font-size: 50px;
        font-weight: 600;
    }

    .subtitle {
        font-size: 30px;
        font-weight: 600;
        color: var(--text-faded);
    }

    .text-content {
        font-size: 20px;
        font-weight: 400;
    }

    ul {
        list-style-type: disc;
        margin-left: 20px;
    }

    @media (max-width: 768px) {
        .content {
            flex-direction: column;
            gap: 20px;
        }

        .branding-container {
            gap: 10px;
            width: 100%;
        }

        .logo {
            width: 128px;
            height: 128px;
        }

        .about-text {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .title {
            font-size: 40px;
        }
    }
</style>
