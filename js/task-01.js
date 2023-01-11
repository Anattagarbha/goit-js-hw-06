// 1 - select proper element from dom
// 2 - calculate categories array length
// 3 - use foreach to iterate through the categories array
// 4 - log values of element name and number of subcategory elements

"use strict";

const totalCategories = document.querySelectorAll("li.item");
console.log("Number of categories: ", totalCategories.length);

totalCategories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent} 
    Elements: ${element.lastElementChild.children.length}`);
});
