const themeButton = document.querySelector("#theme-btn");
function toggleTheme() {
    document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", toggleTheme);