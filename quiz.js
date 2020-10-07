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
var resultEl = document.querySelector("#result");
var questionIndex = 0;
var choiceIndex = 0;

//questiones and answers 

var questionEl = [
  {
    question: "Commonly used data types DO NOT include:",
    choice: ["strings", "booleans", "alerts", "numbers"],
    answers: "alerts",
  },

  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answers: "parentheses",
  },

  {
    question: "Arrays in JavaScript can be used to store ____.",
    choice: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answers: "all of the above",
  },

  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choice: ["commas", "curly brackets", "quotes", "parentheses"],
    answers: "quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice: ["Javascript", "terminal / bash", "for loops", "console log"],
    answers: "console log",
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
//this changes the question to the next one 

var questionEl, questionIndex;

//display questions when button is clicked.
function displayQuestions() {
  if(questionIndex === questionEl.length){
    quizEnd()
  }

  questionTextEl.innerText = questionEl[questionIndex].question; // this displays the question text
  //console.log(questionTextEl);

  // this displays the choices (but they are doubble)?
  var choice = questionEl[questionIndex].choice;
  //console.log(choice);
  for (var i = 0; i < choice.length; i++) {
    //choicesEl.innerHTML +="<button>" + choice[i] + "</button>";
    var choiceEl = document.createElement("button");
    choiceEl.textContent = choice[i];
    choiceEl.setAttribute("class", "btn btn-primary btn-sm  choice");
    choiceEl.setAttribute("type", "button");
    choiceEl.setAttribute("id", "choice-element");
    choicesEl.appendChild(choiceEl);
    //console.log(choice[i]);

    choiceEl.addEventListener("click", function(event) {
      var target = event.target;
      console.log(target.innerText);
      correctAnswers(target.innerText);
     
      questionIndex++;
      setNextQuestion();
      //questionIndex++;
      
      
    
    });
  }


    //eventlistener and conditions for answer. 
  
  
}


displayQuestions();


function correctAnswers(answerText){
  
  var answers = questionEl[questionIndex].answers;
  //console.log(answers);
  console.log(answerText);
  //console.log(this.innerText, answers);
  
  if(answerText.trim() === answers.trim()){
    document.querySelector("#result").innerText = "Correct!";
   
    //questionIndex++;
  }else{
    document.querySelector("#result").innerText = "Incorrect!";
    //questionIndex++;
    

  }
  
  if (resultEl.style.display !== 'none') {
    //wait time to make sure user can see "Correct!" / "Wrong!" msg from last question
    setTimeout(function(){ resultEl.style.display = 'none'; }, 500);
    
}else{
  setTimeout(function(){ resultEl.style.display = 'block';
  setTimeout(function(){ resultEl.style.display = 'none'; }, 300);

}, 500);
}
  

}



function setNextQuestion() {
  
  while(choicesEl.firstChild){
    choicesEl.removeChild(choicesEl.firstChild);
  }
  displayQuestions(questionEl[questionIndex]);
  
}



function quizEnd() {
 
  clearInterval(timeInterval);

  questionsPgEl.style.display = 'none';
  
}

console.log("=========");

//when done with the quiz hide the current page and display all done page.
//show final score and ask for initials and store the scores.
//show high scores.
//if clear highscore button used then clear the scores.
//if goback button used go backto start quize.
