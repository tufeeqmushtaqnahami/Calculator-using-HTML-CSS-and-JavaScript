// Selecting elements
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

// Toggle Light/Dark Mode
modeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
});
