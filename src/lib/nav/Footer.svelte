<footer>
    <div class="wrapper">
        <section>
            <ul class="links">
                <li><a href="https://github.com/Deftu">GitHub</a></li>
                <li><a href="https://github.com/Deftu">YouTube</a></li>
                <li><a href="https://twitter.com/DeftuDev">Twitter</a></li>
                <li><a href="https://github.com/Deftu">Instagram</a></li>
                <li><a href="https://modrinth.com/user/deftu">Modrinth</a></li>
                <li><a href="https://curseforge.com">CurseForge</a></li>
            </ul>
        </section>
        <section>
            <span>&copy; <a href="/">Deftu</a> 2022</span>
        </section>
    </div>
</footer>

<style>
    footer {
        position: relative;
        top: 0;
        width: 100%;
        text-align: center;
        background-color: var(--text);
        color: var(--background);
        padding: 5px;
        z-index: 999999999;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    section {
        padding: 5px;
    }

    .links {
        margin: 0;
        padding: 5px;
        list-style: none;
        display: grid;
        grid-template-rows: 25px 25px;
        grid-template-columns: 75px 75px;
        grid-gap: 5px;
    }
</style>
