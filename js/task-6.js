function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const currentSize = `${initialSize}px`;
    const backgroundColor = getRandomHexColor();
    const box = document.createElement("div");

    box.style.height = currentSize;
    box.style.width = currentSize;
    box.style.backgroundColor = backgroundColor;
    boxes.append(box);
    initialSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

const MIN_BOXES_QUANTITY = 1;
const MAX_BOXES_QUANTITY = 100;

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input[type=number]");

if (controls && boxes && input) {
  controls.addEventListener("click", (e) => {
    const boxesQuantity = input.value;

    if (e.target.dataset.hasOwnProperty("destroy")) {
      destroyBoxes();
    }

    if (
      boxesQuantity < MIN_BOXES_QUANTITY ||
      boxesQuantity > MAX_BOXES_QUANTITY
    ) {
      return;
    }

    if (e.target.dataset.hasOwnProperty("create")) {
      destroyBoxes();
      createBoxes(boxesQuantity);
    }
  });
}
