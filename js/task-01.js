"use strict";

const totalCategories = document.querySelectorAll("li.item");
console.log("Number of categories: ", totalCategories.length);

totalCategories.forEach((element) => {
  console.log(`Категория: ${element.firstElementChild.textContent}, 
    Количество элементов: ${element.lastElementChild.children.length}`);
});
