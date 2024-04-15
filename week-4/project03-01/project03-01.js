/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Hayat Soma
      Date: 4/14/2024

      Filename: project03-01.js
*/
// Select all elements with the class "menuItem"
let menuItems = document.getElementsByClassName("menuItem");

// Loop through the menuItems collection
for (let i = 0; i < menuItems.length; i++) {
    // Add an event listener to each menu item
    menuItems[i].addEventListener("click", function() {
        // Run the calcTotal() function when the menu item is clicked
        calcTotal();
    });
}

function calcTotal() {
    // Declare the orderTotal variable, setting its initial value to 0
    let orderTotal = 0;

    // Loop through the menuItems collection
    for (let i = 0; i < menuItems.length; i++) {
        // Apply an if statement to check if the menu item is checked
        if (menuItems[i].checked) {
            // Increase the value of orderTotal by the value of the checked menu item
            orderTotal += Number(menuItems[i].value);
        }
    }

    // Change the innerHTML property of the element with the id "billTotal"
    // to the value returned by the formatCurrency() function using orderTotal as the parameter value
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}