"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author:Hayat Soma
      Date: 5/5/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
// Step 1: Declare the timeID variable without setting an initial value
let timeID;

// Step 2: Declare the questionList variable and store in it the node list created by the querySelectorAll() method
const questionList = document.querySelectorAll("div#quiz input");

// Step 3: Add an onclick event handler to the startQuiz object
startQuiz.onclick = function() {
    // Set the class attribute of the overlay object to "showquiz"
    overlay.className = "showquiz";
    // Repeat the countdown() function every 1 second and store the id of the timed command in the global timeID variable
    timeID = setInterval(countdown, 1000);
};
function countdown() {
  if (timeLeft === 0) {
      clearInterval(timeID);
      const totalCorrect = checkAnswers();
      if (totalCorrect === correctAnswers.length) {
          alert("Congratulations! You got 100%!");
      } else {
          const incorrectCount = correctAnswers.length - totalCorrect;
          alert(`You got ${incorrectCount} incorrect answer(s) out of ${correctAnswers.length} questions.`);
          timeLeft = quizTime;
          quizClock.value = timeLeft;
          overlay.className = "hidequiz";
      }
  } else {
      timeLeft--;
      quizClock.value = timeLeft;
  }
}
const totalCorrect = checkAnswers();
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

