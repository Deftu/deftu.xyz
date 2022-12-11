<header>
    <div class="left">
        <a href="/" class="logo"><img src="/branding/logo.png" alt="Logo" /></a>
    </div>
    <div class="right">
        <a href="/about" class="nav-item">About</a>
        <a href="/contact" class="nav-item">Contact</a>
        <a href="/projects" class="nav-item">Projects</a>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        min-height: 80px;
        width: 100%;
        background-color: var(--background-2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        animation: slide-in 0.75s ease-out;
    }

    .left {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 64px;
        height: 64px;
    }

    .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .right {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .nav-item {
        font-size: 20px;
        color: var(--text);
        text-decoration: none;
        transition: color 0.15s ease-out;
    }

    .nav-item:hover {
        color: var(--text-disabled);
        transition: color 0.15s ease-out;
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0);
        }
    }
</style>
