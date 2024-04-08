/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Hayat Soma
      Date:4/7/2024

      Filename: project02-04.js
 */





// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;
function calcTotal() {
  let cost = 0;

  // Declare variables for each food item's checkbox
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // Increase cost based on selected items
  if (buyChicken) {
      cost += CHICKEN_PRICE;
  }
  if (buyHalibut) {
      cost += HALIBUT_PRICE;
  }
  if (buyBurger) {
      cost += BURGER_PRICE;
  }
  if (buySalmon) {
      cost += SALMON_PRICE;
  }
  if (buySalad) {
      cost += SALAD_PRICE;
  }

  // Set foodTotal to formatted cost
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Declare tax variable
  let tax = cost * SALES_TAX;

  // Set foodTax to formatted tax
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Declare totalCost variable
  let totalCost = cost + tax;

  // Set totalBill to formatted totalCost
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

  // Further steps of the function will be added next
}
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);
