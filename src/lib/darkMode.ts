import {
    browser
} from "$app/environment";

enum Theme {
    LIGHT = "light",
    DARK = "dark"
}

if (browser) {
    var theme = localStorage.getItem("theme");
    if (!theme) {
        theme = fetchPreferredTheme();
        localStorage.setItem("theme", theme);
    }

    changeTheme(theme);
}

function changeTheme(value: string) {
    if (value == Theme.LIGHT) {
        window.document.body.classList.remove("dark-mode");
    } else {
        window.document.body.classList.add("dark-mode");
    }
}

function toggleTheme() {
    if (!browser)
        return;

    const persistentTheme = localStorage.getItem("theme");
    if (persistentTheme === Theme.LIGHT) {
        localStorage.setItem("theme", Theme.DARK);
        changeTheme(Theme.DARK);
    } else {
        localStorage.setItem("theme", Theme.LIGHT);
        changeTheme(Theme.LIGHT);
    }
}

function fetchPreferredTheme() {
    if (!browser || !window.matchMedia)
        return Theme.LIGHT;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.DARK : Theme.LIGHT;
}

function isDarkMode() {
    return browser && localStorage.getItem("theme") === Theme.DARK;
}

export {
    toggleTheme,
    isDarkMode
};
