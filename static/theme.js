const themes = document.querySelectorAll('[name="theme"]');

console.log("themes = ", themes);
console.time("theme");
var theme = localStorage.getItem("theme");
if (!theme) {
    theme = fetchPreferredTheme();
    localStorage.setItem("theme", theme);
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
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

console.timeEnd("theme");

changeTheme(theme);

// @ts-ignore
function changeTheme(theme) {
    const themeElement = Array.from(themes).filter(
        (t) => t.getAttribute("value") === theme
    )[0];
    if (themeElement) {
        // @ts-ignore
        themeElement.checked = true;
        localStorage.setItem("theme", theme);
        setTheme(theme);
    }
}

// @ts-ignore
function setTheme(theme) {
    document.documentElement.className = `theme-${theme}`;
}

function fetchPreferredTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";
}
