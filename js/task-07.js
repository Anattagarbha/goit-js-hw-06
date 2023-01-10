"use strict";

let inputValue = document.querySelector("input#font-size-control");
let textLook = document.querySelector("span#text");

inputValue.addEventListener("change", (event) => {
  textLook.style.fontSize = `${event.target.value}px`;
});
