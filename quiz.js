//declear variables
var highscoresLinkEl =document.querySelector("#Highscores-link");
var timerEl = document.querySelector("#timer");
var startPageEl = document.querySelector("#start-page");
var btnStartEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var questionTextEl =document.querySelector("#question-text");
var choicesEl = document.querySelector("#choices");
var allDoneEl = document.querySelector("#All-done");
var highscoreEl = document.querySelector("#highscore")

console.log(questionEl);
//creat the rest of the questions and answers.

 var questionEl = [
     {
        asked: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'

     },

     { 
        asked:  'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },

    {
        asked: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'   
    },

    {
        asked: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes'
    },

    {
        asked: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['Javascript', 'terminal / bash', 'for loops', 'console log'],
        answer: 'console log'
    }

];
console.log(questionEl);
//start timer, show quiz and hide start button and other texts .
 btnStartEl.addEventListener("click",()=>{
      startPageEl.style.display = "None";
       
 }
 );
 console.log(startPageEl);





//when done with the quiz hide the current page and display all done page.
//show final score and ask for initials and store the scores.
//show high scores.
//if clear highscore button used then clear the scores.
//if goback button used go backto start quize.