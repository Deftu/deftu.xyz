<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Metadata from "$lib/Metadata.svelte";
	import DevinBadge from "$lib/DevinBadge.svelte";
</script>

<Metadata title="Deftu" description="Deftu's official website." />

<section class="first-section">
	<div class="title-wrapper">
		<h1 class="title">Deftu</h1>
		<p class="subtitle">Developer, innovator and computer enthusiast.</p>
	</div>
	<div class="badges">
		<div class="donation-badges">
			<a href="https://ko-fi.com/Deftu"><DevinBadge type="cozy" category="donate" identifier="kofi-singular_64h" /></a>
			<a href="https://github.com/Deftu"><DevinBadge type="cozy" category="donate" identifier="ghsponsors-singular_64h" /></a>
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
<section class="second-section">
	<div>
		<h1 class="title">Commissions open!</h1>
		<p class="subtitle">Visit my <a href="https://ko-fi.com/Deftu">Ko-Fi</a> page to commission something!</p>
	</div>
</section>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
	}

	section {
		color: var(--text-light);
		text-align: center;
		width: 100vw;
		min-height: 100vh;
		border-top: 0.25em var(--primary) inset;
	}

	section:first-of-type {
		border-top: none;
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

	.badges {
		display: flex;
		flex-direction: column;
	}

	.second-section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
