const changeMode = document.querySelector("#changeMode");

changeMode.addEventListener("click", () => {
    document.querySelector("#changeModeSwitch").style.transition = ".25s";
    checkCurrentTheme() === "dark" ? switchTheme("light") : switchTheme("dark");
});

const switchTheme = (theme) => {
    
    const root = document.querySelector(':root');
    const themesSettings = {
        "light": {
            "image-transform":         "none",
            "modeSwitch":              "translateX(50%)",
            "colors": {
                "primary":             "#111",
                "secondary":           "#fff",
                "tertiary":            "#eee",
                "links":               "rgb(51, 102, 204)",
                "links-active":        "rgb(102, 51, 204)",
                "links-hover":         "rgb(228, 228, 241)",
                "mode-btn-primary":    "#eee",
                "mode-btn-secondary":  "#777",
                "mode-btn-tertiary":   "#333",
                "code-example-bg":     "#f8f8f8",
                "code-example-text":   "#3D7B7B",
                "code-example-border": "#eaecf0",
                "map-style-p":         "#1b7a46",
                "card-gradient":       "linear-gradient(45deg, #ffffff50 10%, #ffffffbb, #ffffff50 90%)",
                "card-gradient-hover": "linear-gradient(45deg, #ffffff80 10%, #ffffffea, #ffffff80 90%)",
                "card-text-primary":   "#333",
                "card-text-secondary": "#666",
                "popup-bg":            "#ffffffd4",
                "card":                "#494242",
            },
        },
        "dark": {
            "image-transform":         "invert(1)",
            "modeSwitch":              "translateX(-50%)",
            "colors": {
                "primary":             "#eee",
                "secondary":           "#111",
                "tertiary":            "#111",
                "links":               "rgb(143, 176, 241)",
                "links-active":        "rgb(176, 148, 231)",
                "links-hover":         "rgb(33, 33, 43)",
                "mode-btn-primary":    "#111",
                "mode-btn-secondary":  "#777",
                "mode-btn-tertiary":   "#eee",
                "code-example-bg":     "#414141",
                "code-example-text":   "#9fcece",
                "code-example-border": "#59645e",
                "map-style-p":         "#7ad4a3",
                "card-gradient":       "linear-gradient(45deg, #22222250 10%, #222222bb, #22222250 90%)",
                "card-gradient-hover": "linear-gradient(45deg, #22222280 10%, #222222ea, #22222280 90%)",
                "card-text-primary":   "#eee",
                "card-text-secondary": "#ddd",
                "popup-bg":            "#000000d4",
                "card":                "#ccb8b8",
            },
        },
    };
    
    // document.querySelector("#globe").style.filter = themesSettings[theme]["image-transform"];
    // document.querySelector(".nav-minified-btn").style.filter = themesSettings[theme]["image-transform"];
    document.querySelector("#changeModeSwitch").style.transform = themesSettings[theme]["modeSwitch"];
    for (const [key, value] of Object.entries(themesSettings[theme]["colors"])) {
        root.style.setProperty(`--clr-${key}`, `${value}`);
    }
    localStorage.setItem("theme", theme);
};

const checkCurrentTheme = () => {
    return localStorage.getItem("theme");
};

window.addEventListener("load", () => {
    checkCurrentTheme() === "dark" ? switchTheme("dark") : switchTheme("light");
});