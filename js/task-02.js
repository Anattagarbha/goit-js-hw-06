// 1 - select proper element
// 2 - create empty final ingredients array
// 3 - iterate over default ingredients array
// 4 - create <li> for each ingredient
// 5 - add class name to <li>
// 6 - copy ingredient's name from default array
// 7 - push item to final array
// 8 - export result to dom

"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const ingredientsArr = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;
  ingredientsArr.push(item);
});

list.append(...ingredientsArr);
