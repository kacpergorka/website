document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("email");
    if (!link) return;

    const encoded = "a29udGFrdEBrYWNwZXJnb3JrYS5jb20=";
    link.href = `mailto:${atob(encoded)}`;
});
