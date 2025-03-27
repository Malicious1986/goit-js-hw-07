const PLACEHOLDER = "Anonymous";
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

if (input) {
  input.addEventListener("input", (e) => {
    output.textContent = e.target.value.trim() || PLACEHOLDER;
  });
}
