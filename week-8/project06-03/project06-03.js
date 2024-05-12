"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Hayat Soma
      Date: 5/11/2024

      Filename: project06-03.js
*/
let useShip = document.getElementById("useShip");
// Add an event listener to useShip to run the copyShippingToBilling() function when clicked
useShip.addEventListener("click", copyShippingToBilling);
function copyShippingToBilling() {
  // Check if useShip is checked
  if (document.getElementById("useShip").checked) {
      // Copy values from shipping fields to corresponding billing fields
      document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
      document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
      document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
      document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
      document.getElementById("cityBill").value = document.getElementById("cityShip").value;
      document.getElementById("countryBill").value = document.getElementById("countryShip").value;
      document.getElementById("codeBill").value = document.getElementById("codeShip").value;

      // Set selectedIndex property of stateBill to selectedIndex property of stateShip
      document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}
// Declare the formElements variable and store the node list of input[type='text'] elements
const formElements = document.querySelectorAll("input[type='text']");

// Declare the fieldCount variable with the length of the formElements node list
const fieldCount = formElements.length;

// Declare the errorBox referencing the element with the id "errorBox"
const errorBox = document.getElementById("errorBox");
for (let i = 0; i < fieldCount; i++) {
  // Apply an event listener for the 'invalid' event
  formElements[i].addEventListener('invalid', showValidationError);
}
function showValidationError(evt) {
  // Prevent the browser from applying native tools for invalid data
  evt.preventDefault();

  // Set the textContent property of errorBox to "Complete all highlighted fields"
  errorBox.textContent = "Complete all highlighted fields";
}