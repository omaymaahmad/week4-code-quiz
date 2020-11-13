
// Homework Code //

// function beginBtn() {
    //     var myVar = setInterval(myTimer, 1000);
    
    //     function myTimer() {
        
        //     }
        // }
        
        /*Variables needed for the code execution
        - Questions which are going to be asked (array of objects which means you iterate over them and display): var questions = [{}, {}, {}]
        - going to need to get all of the different sections in html: var startingPage = document.getElementById("startScreen");
        - going to need a variable to reference the current index question 
        */
       var questions = [{
           question: "Whats your name?",
           answers: ["Bob", "Bill", "bert"],
           correct: "Bob"
       }]
       var currentQuestionIndex = 0; 
       
var beginBtn = document.getElementById("begin");


function startQuiz(){
    var startScreenContent = document.getElementById("startScreen");
    startScreenContent.style.display = "none";
    //start the timer
    //then you call another function which renders the questions onto the screen: showQuestions(); 
showQuestions();
}

function showQuestions(){
 var currentQuestion = document.getElementById("currentQuestion");
 currentQuestion.textContent = questions[currentQuestionIndex].question

 var answersSection = document.getElementById("answersSection"); 
 for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++){
     var answerButton = document.createElement("button"); 
     answerButton.textContent = questions[currentQuestionIndex].answers[i];
     answerButton.onclick = checkAnswer();
    answersSection.appendChild(answerButton);
    }
}

function checkAnswer(){
//look at a way where we can use the 'this' keyword to check whats been clicked against the answer to the question at current index 
//if correct do something
//if wrong do something
// increment the current index and call the showQuestions function again
//unless there are no questions left (can check the length of the array against the current index)....when we end the quiz by calling a function to end the quiz
}

function endQuiz(){
    //display score etc
}

beginBtn.onclick = startQuiz;


// Bottom of the page initise the start of the code execution startQuiz();

