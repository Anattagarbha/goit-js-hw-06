// 1 - select input btn node
// 2 - select body
// 3 - select color value node
// 4 - create listener function
// 5 - init random color variable
// 6 - change bgn color
// 7 - print color value

"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputBtn = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector("span.color");

inputBtn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});
