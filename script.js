var questions = [
  {
    question: "'Snow White' is an example of a ___?",
    answers: ["boolean", "number", "string"],
    correct: "string",
  },
  {
    question: "What is an array?",
    answers: ["list of strings", "list of values", "list of returns"],
    correct: "list of values",
  },
  {
    question: "An iterator tells us how many times we will ___?",
    answers: ["log", "loop", "dance"],
    correct: "loop",
  },
  {
    question: "Properties do not have ___?",
    answers: ["furniture", "a string", "an order"],
    correct: "an order",
  },
  {
    question: "What is an object?",
    answers: ["collection of key value pairs", "a noun", "multiple strings"],
    correct: "collection of key value pairs",
  },
];
var currentQuestionIndex = 0;


var beginBtn = document.getElementById("begin");

function startQuiz() {
  var startScreenContent = document.getElementById("startScreen");
  startScreenContent.style.display = "none";
  //start the timer

  showQuestions();
}

function showQuestions() {
  var currentQuestion = document.getElementById("currentQuestion");
  currentQuestion.textContent = questions[currentQuestionIndex].question;

  var answersSection = document.getElementById("answersSection");
  answersSection.innerHTML = "";
  for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = questions[currentQuestionIndex].answers[i];
    answerButton.setAttribute(
      "value",
      questions[currentQuestionIndex].answers[i]
    );
    answerButton.onclick = checkAnswer;
    answersSection.appendChild(answerButton);
  }
}

function checkAnswer() {
  var answerSelected = this.value;
  console.log(answerSelected);
  if (answerSelected === questions[currentQuestionIndex].correct) {
    alert("correct");
  } else {
    alert("Incorrect");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestions();
  }

  //look at a way where we can use the 'this' keyword to check whats been clicked against the answer to the question at current index
  //if correct do something
  //if wrong do something
  // increment the current index and call the showQuestions function again
  //unless there are no questions left (can check the length of the array against the current index)....when we end the quiz by calling a function to end the quiz
}

// Count highscore
function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var score = scoreEl.value;
  var li = document.createElement("li");
  li.id = peopleScore.length;
  li.innerHTML = name + score + " <button>edit</button>";
  peopleScore.push({ name: score });
  peopleScoreListEl.append(li);
}

function endQuiz() {
  var endScore = checkAnswer;
  var questionsArea = document.getElementById("questions");
  questionsArea.style.display = "none"; 
  var finalMessage = document.getElementById("thanksMessage");
  finalMessage.textContent = "Thanks for taking part!"
  //display score etc
}

beginBtn.onclick = startQuiz;

// Bottom of the page initise the start of the code execution startQuiz();
