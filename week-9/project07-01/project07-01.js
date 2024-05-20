"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author:Hayat Soma
      Date: 5/19/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

}
);
function handleSubmit(event) {
  // Prevent the default form submit action
  event.preventDefault();
  console.log('Form submission prevented.');

  // You can add your custom form handling logic here
}

// Wait for the DOM to be fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('myForm');

  // Attach the submit event listener to the form
  form.addEventListener('submit', handleSubmit);
});
const regex1 = /[A-Z]/;
const regex2 = /\d/;
const regex3 = /[!$#%\.]/;
if (pwd.length < 8) {
  feedback.textContent = "Your password must be at least 8 characters.";
} else if (!regex1.test(pwd)) {
  feedback.textContent = "Your password must include an uppercase letter.";
} else if (!regex2.test(pwd)) {
  feedback.textContent = "Your password must include a number.";
} else if (!regex3.test(pwd)) {
  feedback.textContent = "Your password must include one of the following: !$#%.";
} else {
  signupForm.submit();
}