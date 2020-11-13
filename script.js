/*Variables needed for the code execution
- Questions which are going to be asked (array of objects which means you iterate over them and display): var questions = [{}, {}, {}]
- going to need to get all of the different sections in html: var startingPage = document.getElementById("startScreen");
- going to need a variable to reference the current index question 
*/


function startQuiz(){
    //remove the visibility of the start screen div
    //display the questions div
    //start the timer
    //then you call another function which renders the questions onto the screen: showQuestions(); 
}

function showQuestions(){
// use the variable at the top to find out what to display
// need to look at how to add content to a h3 for example in the html from this script
//when creating the buttons for the choices and appending them to the choices area in the html we can add an onclick for another function (checkAnswer)
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




// Bottom of the page initise the start of the code execution startQuiz();

