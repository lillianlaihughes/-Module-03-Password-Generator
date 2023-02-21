var scoreboard = document.getElementById("scoreboard")
var countdown = document.getElementById("countdown")

var startButton = document.getElementById("start-button")

var questionEl = document.getElementById("question-el");
var choiceA = document.getElementById("choice-a")
var choiceB = document.getElementById("choice-b")
var choiceC = document.getElementById("choice-c")
var choiceD = document.getElementById("choice-d")
var choiceE = document.getElementById("choice-e")

var resultEl = document.getElementById("result-el")

var userChoice = document.getElementsByClassName("user-choice")

var currentQ = 0;

// var answerStorage ???

// Q and A array, with question, answers (another array) and correctAnswer
var myQuestions = [
	{
		question: "We have several Teaching Assistants in our cohort. Who is not a TA?",
		answers: {
      a: "Constan F.", correctAnswer: false,
      b: "Andres I.", correctAnswer: false,
      c: "Andres J.", correctAnswer: false,
      d: "Saurav K.", correctAnswer: true,
      e: "Morgan R.", correctAnswer: false
   },
		// correctAnswer: "d"
	},
	{
		question: "We also have a Student Success Manager for our cohort. Who is it?",
		answers: {
      a: "Stephanie Gulden", correctAnswer: false,
      b: "Saurav Khatiwada", correctAnswer: false,
      c: "CJ McKenney", correctAnswer: false,
      d: "Dominique Meeks Gombe", correctAnswer: false,
      e: "Jesse Pacheco", correctAnswer: true
		},
		// correctAnswer: "e"
	},
  {
		question: "Commonly used data types do NOT include one of these items. Which is the odd one out?",
		answers: {
      a: "Alerts",
      b: "Arrays",
      c: "Booleans",
      d: "Numbers",
      e: "Strings"
		},
		correctAnswer: "a"
	},
  {
		question: "The condition in an if/else statement is enclosed in a pair of these:",
		answers: {
      a: "Curly braces",
      b: "Exclamation points",
      c: "Forward slashes",
      d: "Parentheses",
      e: "Square brackets"
		},
		correctAnswer: "d"
	},
  {
		question: "A useful tool used during development for printing content to the debugger is:",
		answers: {
      a: "console.log",
      b: "for loops",
      c: "JavaScript",
      d: "terminal/bash",
      e: "YouTube"
		},
		correctAnswer: "a"
	},
  {
		question: "Arrays in JavaScript can be used to store which of these data types:",
		answers: {
      a: "Booleans",
      b: "Numbers",
      c: "Strings",
      d: "Other arrays",
      e: "All of the above"
		},
		correctAnswer: "e"
	},
  {
		question: "When string values are assigned to variables, they must be enclosed within:",
		answers: {
      a: "Commas",
      b: "Curly braces",
      c: "Forward slashes",
      d: "Parentheses",
      e: "Quotation marks"
		},
		correctAnswer: "e"
	},
  {
		question: "In the context of this bootcamp, what does API stand for?",
		answers: {
      a: "Aches Pains Injuries",
      b: "Apple Powered Internet",
      c: "Application Programming Interface",
      d: "Anxiety Pressure Insecurity",
      e: "Atlanta People Incredible"
		},
		correctAnswer: "c"
	},
];
// console.log(myQuestions)

startButton.addEventListener("click", renderQuiz());
function renderQuiz() {
  startButton.style.display = "none";
  if (currentQ < myQuestions.length) {
    questionEl.textContent = myQuestions[currentQ].question;
    // questionEl.textContent = myQuestions[currentQ].answers;
    choiceA.textContent = myQuestions[currentQ].answers.a;
    choiceB.textContent = myQuestions[currentQ].answers.b;
    choiceC.textContent = myQuestions[currentQ].answers.c;
    choiceD.textContent = myQuestions[currentQ].answers.d;
    choiceE.textContent = myQuestions[currentQ].answers.e;
   //  currentQ++;   
  } else {
    return;
  }
  }

// // function to check answer check answer
// // deduct time if applicable
// // and display next question or final score page
userChoice.addEventListener("click", checkAnswer());

function checkAnswer() {
   if (myQuestions[currentQ].correctAnswer = false) {
      resultEl.textContent = "Sorry, that is incorrect. 10 seconds will be deducted.";
      // INSERT TIME DEDUCTION HERE
   } else {
      resultEl.textContent = "That is correct! Keep studying though.";
      currentQ++;
      renderQuiz();
   }
};
console.log(myQuestions[currentQ].correctAnswer = false)