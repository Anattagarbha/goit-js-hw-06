// 1 - select login form node
// 2 - create submit listener function
// 3 - declare callback function
// 4 - prevent default browser behavior
// 5 - identify targets of event
// 6 - if empty targets true, return alert
// 7 - else, collect user input
// 8 - print user input to console
// 9 - reset form

"use strict";

let formInput = document.querySelector(".login-form");
formInput.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please enter a valid email and password");
  }
  const userData = { email: email.value, password: password.value };
  console.log(userData);
  event.currentTarget.reset();
}
