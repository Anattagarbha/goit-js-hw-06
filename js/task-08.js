"use strict";

let formInput = document.querySelector(".login-form");
formInput.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  let {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please enter a valid email and password");
  }
  let userData = { email: email.value, password: password.value };
  console.log(userData);
  event.currentTarget.reset();
}
