/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Hayat Soma
      Date: 4/7/2024

      Filename: project03-01.js
*/





 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 let captions = ["Caption 1", "Caption 2", "Caption 3"];
 let htmlCode = "";
 for (let i = 0; i < captions.length; i++) {
  htmlCode += `<figure>
  <img alt='' src='slide${i}.jpg' />
  <figcaption>caption(${i}) '${captions[i]}'</figcaption>
</figure>`;
}
document.getElementById("gallery").innerHTML = htmlCode;