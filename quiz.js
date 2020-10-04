//declear variables
var highscoresLinkEl =document.querySelector("#Highscores-link");
var timerEl = document.querySelector("#timer");
var startPageEl = document.querySelector("#start-page");
var btnStartEl = document.querySelector("#start");
var questionsPgEl = document.querySelector("#questions-pg");
var questionTextEl =document.querySelector("#question-text");
var choicesEl = document.querySelector("#choices");
//var allDoneEl = document.querySelector("#All-done");
var highscoreEl = document.querySelector("#highscore");
//var resetBtnEl = document.querySelector("#goback");
//var clearEl = document.querySelector("#clear highscore");
var btnChoiceEl = document.getElementsByClassName("choise");
var questionIndex= 0;

var answer = true;
var choiceIndex = 0;
//creat the rest of the questions and answers.

var questionEl = [
    {
        question: 'Commonly used data types DO NOT include:',
        choice: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    
    },

    { 
        question:  'The condition in an if / else statement is enclosed within ____.',
        choice: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },

    {
        question: 'Arrays in JavaScript can be used to store ____.',
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'   
    },

    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        choice: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes'
    },

    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
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

var currentQuestions;
var currentChoice;
//loop the questions when answer is clicked.
function displayQuestions(){
    
    var currentQuestions= questionEl[i].question;
    currentQuestions.question=questionTextEl.textContent ;
    var currentChoice= questionEl[i].choice;
    btnChoiceEl.textContent = currentChoice.choice;
    
    
    
    //console.log(choiceIndex);
    //console.log(questionIndex);
    //console.log(currentQuestions);
    //console.log(currentChoice);
    //console.log(questionEl[1].question);
    //console.log(questionEl[1].choice);
    console.log(questionIndex[0]);
    console.log(questionIndex[1]);

    console.log(questionIndex[2]);


}

    

    for (var i = 0; i< questionTextEl.length; i++){
        var questionIndex = Math.floor(Math.random()*questionTextEl.length);
        console.log(questionIndex);
        

        btnChoiceEl.addEventListener("click",()=>{
            if (answer===true){
                currentQuestions=questionEl[1].question;
                currentChoice = questionEl[1].choice;
                questionIndex++
                choiceIndex++
    
            }
            else{
                currentQuestions=questionEl[1].question;
                currentChoice = questionEl[1].choice;
            }
            nextQuiz();
    
        });   

        //console.log( questionIndex++)


        console.log("=========")
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
    

