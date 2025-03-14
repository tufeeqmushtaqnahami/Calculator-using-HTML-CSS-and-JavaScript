// Selecting elements
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;
let buttons = document.querySelectorAll('.buttons button'); // Fix class selection
let string = "";

// Loop through each button and add event listeners
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string); // Using eval() to evaluate the expression
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

// Toggle Light/Dark Mode
modeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    modeToggle.textContent = body.classList.contains("light-mode") ? "☀️" : "🌙";
});
