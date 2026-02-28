const updateThemeColor = () => {
    const themeColorMeta = document.getElementById("theme-color-meta");
    if (themeColorMeta) {
        const isDark = document.documentElement.classList.contains("dark");
        themeColorMeta.setAttribute("content", isDark ? "#111827" : "#ffffff");
    }
};

const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    updateThemeColor();
};

const initializeEmailProtection = () => {
    const encoded = "a29udGFrdEBrYWNwZXJnb3JrYS5jb20=";
    const link = document.getElementById("email");
    if (link) {
        link.setAttribute("href", `mailto:${atob(encoded)}`);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeEmailProtection();
});

// Watch for system theme changes dynamically
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    // Only update automatically if the user hasn't explicitly set a preference
    if (!localStorage.getItem("theme")) {
        if (e.matches) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        updateThemeColor();
    }
});
