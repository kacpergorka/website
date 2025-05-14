tailwind.config = {
	darkMode: "class"
};

function toggleTheme() {
	const isDark = document.documentElement.classList.toggle("dark");
	localStorage.setItem("theme", isDark ? "dark" : "light");
	updateThemeColor();
}

function updateThemeColor() {
	const themeColorMeta = document.getElementById("theme-color-meta");
  	const isDark = document.documentElement.classList.contains("dark");
  	if (themeColorMeta) {
		themeColorMeta.setAttribute("content", isDark ? "#111827" : "#ffffff");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const savedTheme = localStorage.getItem("theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
		document.documentElement.classList.add("dark");
  	} else {
		document.documentElement.classList.remove("dark");
	}

	updateThemeColor();
})

document.addEventListener("DOMContentLoaded", function () {
	const encoded = "a29udGFrdEBrYWNwZXJnb3JrYS5jb20=";
	const decoded = atob(encoded);

	const link = document.getElementById("email");
	if (link) {
		link.setAttribute("href", "mailto:" + decoded);
	}
})