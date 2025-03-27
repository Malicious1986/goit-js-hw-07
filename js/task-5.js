function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

if (span && button) {
  let color = getRandomHexColor();
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
    color = getRandomHexColor();
    updateSpan(color);
  });
}

function updateSpan(color) {
  span.textContent = color;
}
