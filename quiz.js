//declear variables
//var highscoresLinkEl = document.querySelector("#Highscores-link");
var timerEl = document.querySelector("#timer");
var startPageEl = document.querySelector("#start-page");
var btnStartEl = document.querySelector("#start");
var questionsPgEl = document.querySelector("#questions-pg");
var questionTextEl = document.querySelector("#question-text");
var choicesEl = document.querySelector("#choices");
//var allDoneEl = document.querySelector("#All-done");
//var highscoreEl = document.querySelector("#highscore");
//var resetBtnEl = document.querySelector("#goback");
//var clearEl = document.querySelector("#clear highscore");
var msgEl = document.querySelector("#message");
var questionIndex = 0;
var choiceIndex = 0;

//questiones and answers 

var questionEl = [
  {
    question: "Commonly used data types DO NOT include:",
    choice: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },

  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },

  {
    question: "Arrays in JavaScript can be used to store ____.",
    choice: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },

  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choice: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log",
  },
];
//eventlistener for start button
btnStartEl.addEventListener("click", start);

//start timer, show quiz and hide start button and other texts .
// variables for timer.
var timer = 60;
var score = 0;
var timeInterval;

//display questions and timer
function start() {
  startPageEl.style.display = "none";
  questionsPgEl.style.display = "block";

  //time
  timeInterval = setInterval(function () {
    timer--;

    timerEl.textContent = "Timer" + "  " + timer;

    if (timer === 0) {
      clearInterval(timeInterval);
      quizEnd();
    }
  }, 1000);
}
function setNextQuestion() {
  displayQuestions(questionEl[questionIndex]);
  quizEnd();
}
var questionEl, questionIndex;

//display questions when button is clicked.
function displayQuestions() {
  questionTextEl.innerText = questionEl[questionIndex].question; // this displays the question text
  console.log(questionTextEl);

  // this displays the choices (but they are doubble)?
  var choice = questionEl[questionIndex].choice;
  console.log(choice);
  for (var i = 0; i < choice.length; i++) {
    //choicesEl.innerHTML +="<button>" + choice[i] + "</button>";
    var choiceEl = document.createElement("button");
    choiceEl.textContent = choice[i];
    choiceEl.setAttribute("class", "btn btn-primary btn-sm  choice");
    choiceEl.setAttribute("type", "button");
    choiceEl.setAttribute("id", "choice-element");
    choicesEl.appendChild(choiceEl);
    console.log(choice[i]);

    choiceEl.addEventListener("click", () => {
      questionIndex++;

      setNextQuestion();
    });
  }
    //eventlistener and conditions for answer. 
  msgEl.addEventListener("click", (answer) => {
    msgEl.style.display = "none";
    correctAnswer = questionEl[questionIndex].answer;
    var answer = this.innerText;
    console.log(this.innerText , correctAnswer);

    if (answer === correctAnswer) {
      timer = timer + 15;
      msgEl.style.display = "block";
      msgEl.innerText = "Correct!";
    } else {
      timer = timer - 15;
      msgEl.style.display = "block";
      msgEl.innerText = "Wrong!";
    }
  });
}

displayQuestions();

// end quiz
function quizEnd() {
  clearInterval(timeInterval);
  startPageEl.style.display = "none";
  questionsPgEl.style.display = "block";
}

console.log("=========");

//when done with the quiz hide the current page and display all done page.
//show final score and ask for initials and store the scores.
//show high scores.
//if clear highscore button used then clear the scores.
//if goback button used go backto start quize.
