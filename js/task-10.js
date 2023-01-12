// 1 - select btn nodes
// 2 - init input value
// 3 - select elements node
// 4 - create boxes...
// 5 - add create listener function
// 6 - add destroy listener function

"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputValue = document.querySelector("#controls>input");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let totalElements = [];
  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.style.width = `${30 + 10 * i}px`;
    element.style.height = `${30 + 10 * i}px`;
    element.style.backgroundColor = getRandomHexColor();
    totalElements.push(element);
  }
  return totalElements;
};

createBtn.addEventListener("click", () => {
  const newBoxes = createBoxes(inputValue.value);
  boxes.append(...newBoxes);
});

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

destroyBtn.addEventListener("click", () => {
  destroyBoxes.call();
});
