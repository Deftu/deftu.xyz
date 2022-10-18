<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Metadata from "$lib/Metadata.svelte";
	import DevinBadge from "$lib/DevinBadge.svelte";
  	import Switch from "$lib/Switch.svelte";

	import {
		toggleTheme,
		isDarkMode
	} from "$lib/darkMode";
</script>

<Metadata title="Deftu" description="Deftu's official website." />

<header>
	<Switch on:click={toggleTheme} checked={isDarkMode()} />
	<p>Dark Mode</p>
</header>

<section class="first-section">
	<div class="title-wrapper">
		<h1 class="title username">Deftu</h1>
		<p class="subtitle">
			Owner of <a href="https://unifycraft.xyz/" class="unifycraft brand-name">UnifyCraft</a>.
			<br>
			Owner of <a href="https://uniloader.unifycraft.xyz/" class="unifycraft brand-name">UniLoader</a>.
			<br>
			Developer at <a href="https://github.com/100MediaFabric" class="brand-name">100Media</a>.
			<br>
			<a href="https://ko-fi.com/Deftu/commissions" class="brand-name">Commisisons are open!</a>
		</p>
		<p class="subtitle">Developer, innovator, entrepreneur, gamer and professional idiot.</p>
	</div>
	<div class="badges">
		<div class="donation-badges">
			<a href="https://ko-fi.com/Deftu"><DevinBadge type="cozy" category="donate" identifier="kofi-singular_64h" /></a>
			<!-- <a href="https://github.com/Deftu"><DevinBadge type="cozy" category="donate" identifier="ghsponsors-singular_64h" /></a> -->
			<a href="https://paypal.me/MatthewTGM"><DevinBadge type="cozy" category="donate" identifier="paypal-singular_64h" /></a>
		</div>
		<div>
			<a href="https://shr.deftu.xyz/discord"><DevinBadge type="cozy" category="social" identifier="discord-singular_64h" /></a>
			<a href="https://twitch.tv/deftudev"><DevinBadge type="cozy" category="social" identifier="twitch-singular_64h" /></a>
			<a href="https://www.youtube.com/channel/UCJAR--rGr012udfBDBwHO-g"><DevinBadge type="cozy" category="social" identifier="youtube-singular_64h" /></a>
		</div>
		<div class="work-badges">
			<a href="https://modrinth.com/user/deftu"><DevinBadge type="cozy" category="available" identifier="modrinth_64h" /></a>
			<a href="https://www.curseforge.com/members/deftudev"><DevinBadge type="cozy" category="available" identifier="curseforge_64h" /></a>
			<a href="https://github.com/Deftu"><DevinBadge type="cozy" category="social" identifier="github-singular_64h" /></a>
		</div>
	</div>
</section>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
	}

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: absolute;
		padding: 10px;
		top: 0;
		width: 100%;
		color: var(--text);
	}

	header > p {
		padding-left: 10px;
	}

	section {
		color: var(--text);
		text-align: center;
		width: 100vw;
		min-height: 100vh;
		border-top: 0.25em var(--primary) inset;
	}

	section:first-of-type {
		border-top: none;
	}

	.username {
		color: var(--primary);
	}

	.title {
		font-size: 40px;
		font-weight: bold;
	}

	.subtitle {
		font-size: 25px;
	}

	.first-section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.brand-name {
		font-weight: bold;
	}

	.unifycraft {
		color: #2A628F;
	}

	.badges {
		display: flex;
		flex-direction: column;
	}
</style>
