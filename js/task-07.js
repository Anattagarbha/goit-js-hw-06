// 1 - select input bar node
// 2 - select text node
// 3 - create bar event listener
// 4 - change text font size using template string

"use strict";

const inputValue = document.querySelector("input#font-size-control");
const textLook = document.querySelector("span#text");

inputValue.addEventListener("change", (event) => {
  textLook.style.fontSize = `${event.target.value}px`;
});
