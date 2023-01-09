"use strict";

const textInput = document.querySelector("#validation-input");
const textLength = textInput.dataset.length;

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number.parseInt(textLength)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
