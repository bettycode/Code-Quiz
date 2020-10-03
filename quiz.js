//declear variables
var currentQuestions = 0





var highscoresLinkEl =document.querySelector("#Highscores-link");
var timerEl = document.querySelector("#timer");
var startPageEl = document.querySelector("#start-page");
var btnStartEl = document.querySelector("#start");
var questionsPgEl = document.querySelector("#questions-pg");
var questionTextEl =document.querySelector("#question-text");
var choicesEl = document.querySelector("#choices");
var allDoneEl = document.querySelector("#All-done");
var highscoreEl = document.querySelector("#highscore")
var resetBtnEl = document.querySelector("#goback");
var clearEl = document.querySelector("#clear highscore");
var btnChoiceEl = document.getElementsByClassName("choise");


var currentQuestions = {};

//creat the rest of the questions and answers.

var questionEl = [
    {
        asked: 'Commonly used data types DO NOT include:',
        choice: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    
    },

    { 
        asked:  'The condition in an if / else statement is enclosed within ____.',
        choice: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },

    {
        asked: 'Arrays in JavaScript can be used to store ____.',
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'   
    },

    {
        asked: 'String values must be enclosed within ____ when being assigned to variables.',
        choice: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes'
    },

    {
        asked: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice: ['Javascript', 'terminal / bash', 'for loops', 'console log'],
        answer: 'console log'
    }

];

//start timer, show quiz and hide start button and other texts .

var timer = 60;
var score= 0
//display questions and timer
function showQuiz(){
    questionsPgEl.style.display = "block"; //question displayed.
    displayQuestions();

    //time
    var timeInterval = setInterval(function(){
        timer--;
        
        timerEl.textContent = "Timer" + "  "
        + timer;

        if(timer=== 0){
            clearInterval(timeInterval);
        }


    }, 1000);


}


//loop the questions when answer is clicked.
function displayQuestions(){
    
    
    //getNewQuestions();
}    


//when done with the quiz hide the current page and display all done page.
//show final score and ask for initials and store the scores.
//show high scores.
//if clear highscore button used then clear the scores.
//if goback button used go backto start quize.

btnStartEl.addEventListener("click",()=>{
    startPageEl.style.display = "None";
    showQuiz();

}
);