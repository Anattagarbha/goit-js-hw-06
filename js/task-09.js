"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let inputBtn = document.querySelector("button.change-color");
let body = document.querySelector("body");
let colorValue = document.querySelector("span.color");

inputBtn.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});
