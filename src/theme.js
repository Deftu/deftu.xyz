import {
    browser
} from "$app/environment";
const themes = browser ? document.querySelectorAll("[name=\"theme\"]") : [];

if (browser) {
    var theme = localStorage.getItem("theme");
    if (!theme) {
        theme = fetchPreferredTheme();
        localStorage.setItem("theme", theme);
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (theme == "dark" || theme == "light") {
            changeTheme(e.matches ? "dark" : "light");
        }
    });

    themes.forEach((t) => {
        t.addEventListener("change", (e) => {
            // @ts-ignore
            changeTheme(e.target.value);
        });
    });

    changeTheme(theme);
}

// @ts-ignore
function changeTheme(theme) {
    if (!browser) return

    const themeElement = Array.from(themes).filter((t) => t.getAttribute("value") === theme)[0];
    if (themeElement) {
        // @ts-ignore
        themeElement.checked = true;
        localStorage.setItem("theme", theme);
    }
}

function fetchPreferredTheme() {
    if (!browser) return "light";

    return window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
}

export {
    changeTheme,
    fetchPreferredTheme
};
