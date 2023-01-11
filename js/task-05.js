// 1 - select input and output nodes
// 2 - create input listener function
// 3 - check anonymous condition
// 4 - if false, print input message

"use strict";

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (event.target.value === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = event.target.value;
  }
});
