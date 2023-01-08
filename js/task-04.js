let counterValue = 0;
let displayCounter = document.querySelector("#value");
let plusBtn = document.querySelector('button[data-action="increment"]');
let minusBtn = document.querySelector('button[data-action="decrement"]');

plusBtn.addEventListener("click", () => {
  counterValue++;
  displayCounter.textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
  counterValue--;
  displayCounter.textContent = counterValue;
});
