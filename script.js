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
var countDown;

function startQuiz() {
  var startScreenContent = document.getElementById("startScreen");
  startScreenContent.style.display = "none";
  startTimer();
  showQuestions();
}

function startTimer() {
  var timer = document.getElementById("timerDisplay");
  var timeRemaining = 30;
  countDown = setInterval(function secondsLeft() {
    timeRemaining--;
    timer.textContent = "timer: " + timeRemaining;
    if (timeRemaining < 0) {
      endQuiz();
    }
  }, 1000);
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
}

function endQuiz() {
  clearInterval(countDown);
  var questionsArea = document.getElementById("questions");
  questionsArea.style.display = "none";
  var finalMessage = document.getElementById("thanksMessage");
  finalMessage.textContent = "Thanks for taking part!";
}

beginBtn.onclick = startQuiz;
