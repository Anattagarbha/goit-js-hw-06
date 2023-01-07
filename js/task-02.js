"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.querySelector("#ingredients");
let ingredientsArr = [];

ingredients.forEach((ingredient) => {
  let item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;
  ingredientsArr.push(item);
});

list.append(...ingredientsArr);
