let isTooltipVisible = false;

tailwind.config = {
  darkMode: "class"
};

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  updateThemeColor();
}

function updateThemeColor() {
  const themeColorMeta = document.getElementById("theme-color-meta");
  const isDark = document.documentElement.classList.contains("dark");
  themeColorMeta.setAttribute("content", isDark ? "#111827" : "#ffffff");
}

function showTooltip(tooltip) {
  tooltip.classList.add("opacity-100");
  tooltip.classList.remove("opacity-0");
  isTooltipVisible = true;
}

function hideTooltip(tooltip) {
  tooltip.classList.add("opacity-0");
  tooltip.classList.remove("opacity-100");
  isTooltipVisible = false;
}

function toggleDiscordTooltip() {
  const tooltip = document.getElementById("discordTooltip");
  if (window.innerWidth > 768) return;

  isTooltipVisible ? hideTooltip(tooltip) : showTooltip(tooltip);
}

document.addEventListener("click", function (event) {
  const icon = document.getElementById("discordIcon");
  const tooltip = document.getElementById("discordTooltip");

  if (isTooltipVisible && !icon.contains(event.target)) {
    hideTooltip(tooltip);
  }
});

document.addEventListener("DOMContentLoaded", updateThemeColor);