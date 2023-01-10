"use strict";

let textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (event.target.value === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = event.target.value;
  }
});
