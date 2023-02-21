// var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results")
// var startButton = document.getElementById("start-button")
var startSection = document.getElementById("start-section")

submitButton.addEventListener("click", startQuiz);
var iQuestion = 0;

function showCurrentQuestion(){
  const current = myQuestions[iQuestion];

  const html =`<h1>${current.question}</h1>
    <ul>
      <button>${current.answers.a}</button>
      <button>${current.answers.b}</button>
      <button>${current.answers.c}</button>
      <button>${current.answers.d}</button>
    </ul>`

  quizContainer.innerHTML = html
}

function startQuiz(){
  startSection.classList.add("hide");
  submitButton.classList.add("hide");
//  countdown();
 showCurrentQuestion()
}

function displayResults(){

}

// call the function to show the quiz
// displayQuiz();

// show results when submit button is clicked
// submitButton.addEventListener("click", displayResults);


// console.log(myQuestions.length)

// why is var the same color as countdown here?
var countdown = document.getElementById("countdown");

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
      timerEl.textContent = 'Please put down your pencils, the test is over!';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
       }
  }, 1000);
}