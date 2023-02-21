var scoreboard = document.getElementById("scoreboard")
var countdown = document.getElementById("countdown")

var startButton = document.getElementById("start-button")
var quizContainer = document.getElementById("quiz-container")
var questionEl = document.getElementById("question-el")
var choiceA = document.getElementById("choice-a")
var choiceB = document.getElementById("choice-b")
var choiceC = document.getElementById("choice-c")
var choiceD = document.getElementById("choice-d")
var choiceE = document.getElementById("choice-e")

var resultEl = document.getElementById("result-el")

var userChoice = document.getElementsByClassName("user-choice")

// var currentQ = 0;

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
      }
		// , correctAnswer: "d"
	},
	{
		question: "We also have a Student Success Manager for our cohort. Who is it?",
		answers: {
      a: "Stephanie Gulden", correctAnswer: false,
      b: "Saurav Khatiwada", correctAnswer: false,
      c: "CJ McKenney", correctAnswer: false,
      d: "Dominique Meeks Gombe", correctAnswer: false,
      e: "Jesse Pacheco", correctAnswer: true
		}
		// , correctAnswer: "e"
	},
  {
		question: "Commonly used data types do NOT include one of these items. Which is the odd one out?",
		answers: {
      a: "Alerts", correctAnswer: true,
      b: "Arrays", correctAnswer: false,
      c: "Booleans", correctAnswer: false,
      d: "Numbers", correctAnswer: false,
      e: "Strings", correctAnswer: false
		}
		// , correctAnswer: "a"
	},
  {
		question: "The condition in an if/else statement is enclosed in a pair of these:",
		answers: {
      a: "Curly braces", correctAnswer: false,
      b: "Exclamation points", correctAnswer: false,
      c: "Forward slashes", correctAnswer: false,
      d: "Parentheses", correctAnswer: true,
      e: "Square brackets", correctAnswer: false
	   }
      // , correctAnswer: "d"
	},
  {
		question: "A useful tool used during development for printing content to the debugger is:",
		answers: {
      a: "console.log", correctAnswer: true,
      b: "for loops", correctAnswer: false,
      c: "JavaScript", correctAnswer: false,
      d: "terminal/bash", correctAnswer: false,
      e: "YouTube", correctAnswer: false,
		}
		// , correctAnswer: "a"
	},
  {
		question: "Arrays in JavaScript can be used to store which of these data types:",
		answers: {
      a: "Booleans", correctAnswer: false,
      b: "Numbers", correctAnswer: false,
      c: "Strings", correctAnswer: false,
      d: "Other arrays", correctAnswer: false,
      e: "All of the above", correctAnswer: true
		}
		// , correctAnswer: "e"
	},
  {
		question: "When string values are assigned to variables, they must be enclosed within:",
		answers: {
      a: "Commas", correctAnswer: false,
      b: "Curly braces", correctAnswer: false,
      c: "Forward slashes", correctAnswer: false,
      d: "Parentheses", correctAnswer: false,
      e: "Quotation marks", correctAnswer: true
		}
		// , correctAnswer: "e"
	},
  {
		question: "In the context of this bootcamp, what does API stand for?",
		answers: {
      a: "Aches Pains Injuries", correctAnswer: false,
      b: "Apple Powered Internet", correctAnswer: false,
      c: "Application Programming Interface", correctAnswer: true,
      d: "Anxiety Pressure Insecurity", correctAnswer: false,
      e: "Atlanta People Incredible", correctAnswer: false
		}
		// , correctAnswer: "c"
	},
];
// console.log(myQuestions)

//hides the question sections before quiz starts
// quizContainer.style.display = "none";
startButton.addEventListener("click", function() {
   startButton.style.display = "none";
   quizContainer.style.display = "block";
   showQuestion()
});

function showQuestion() {
   for (var currentQ = 0; currentQ < myQuestions.length; currentQ++) {
    questionEl.textContent = myQuestions[currentQ].question;
    choiceA.textContent = myQuestions[currentQ].answers.a;
    choiceB.textContent = myQuestions[currentQ].answers.b;
    choiceC.textContent = myQuestions[currentQ].answers.c;
    choiceD.textContent = myQuestions[currentQ].answers.d;
    choiceE.textContent = myQuestions[currentQ].answers.e;  
    return;
  }
}


// function to check answer check answer
// deduct time if applicable
// and display next question or final score page
choiceA.addEventListener("click", checkAnswer());
choiceB.addEventListener("click", checkAnswer());
choiceC.addEventListener("click", checkAnswer());
choiceD.addEventListener("click", checkAnswer());
choiceE.addEventListener("click", checkAnswer());

function checkAnswer() {
   console.log("a button was clicked")
//    for (var currentQ = 0; currentQ < myQuestions.length; currentQ++) {
//    if (myQuestions[currentQ].answers.correctAnswer = false) {
//       resultEl.textContent = "Sorry, that is incorrect. 10 seconds will be deducted.";
//       // INSERT TIME DEDUCTION HERE
//    } else {
//       resultEl.textContent = "That is correct! Keep studying though.";
//       currentQ++;
//       showQuestion();
//    }
// }
};