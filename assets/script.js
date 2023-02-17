// COUNTDOWN TIMER CODE FROM CLASS ACTIVITY
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');


// Timer that counts down from 90
function countdown() {
  var timeLeft = 90;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
}

var correctAnswers = ["Saurav K.", "Jesse Pacheco", "Alerts", "Curly braces", "console.log", "All of the above", "Quotation marks", "Application Programming Interface"]
// The if/else statement to determine if user selects correct answers
if (userChoice === correctAnswers) {

    window.alert("That's correct. You can do this! But you still have to keep studying.");

 
  } 
  // If above condition failed, assume user is incorrect
    else {
   
    window.alert("Sorry, that's incorrect. Don't give up; keep studying. You got this!");
  }