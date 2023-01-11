// 1 - select node
// 2 - init input length var
// 3 - create focus event listener
// 4 - if true length, set focus to green
// 5 - else set focus to red

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
