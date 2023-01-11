// 1 - init counter
// 2 - select counter's node
// 3 - select buttons nodes
// 4 - create listeners
// 5 - increment plusBtn counter
// 6 - change counter value
// 7 - decrement minusBtn counter
// 8 - change counter value

"use strict";

let counterValue = 0;
const displayCounter = document.querySelector("#value");
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');

plusBtn.addEventListener("click", () => {
  counterValue++;
  displayCounter.textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
  counterValue--;
  displayCounter.textContent = counterValue;
});
