/*-------------- Constants ---------------*/
const questions = [
  {
    question: "Where is the hightest mountain in the world located?",
    answers: [
      "Nepal",
      "Denali",
      "Dubai",
      "India",
      //   { text: "Nepal", correct: true },
      //   { text: "Denali", correct: false },
      //   { text: "Dubai", correct: false },
      //   { text: "India", correct: false },
    ],
  },

  {
    question: "What is the capital of Thailand?",
    answers: ["Bangkok", "Hanoi", "Caracas"],
    // { text: "Bangkok", correct: true },
    // { text: "Hanoi", correct: false },
    // { text: "Caracas", correct: false },
    // { text: "Bogota", correct: false },
  },
];

/*-------------------- app's state (variables) ----------- */

/*---------------- cached element ----------------*/
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question");
const answerOptions = document.querySelectorAll("btn");
/*---------------- event listeners ------------*/
startButton.addEventListener("click", startGame);

/*---------------------- function -----------------*/
function startGame() {
  let nextQuestion = questions[Math.floor(Math.random() * questions.length)];
  questionContainer.innerHTML = `${nextQuestion.question}`;
  answerOptions.forEach(function (el, ind) {
    el.innerHTML = questions.answers[ind];
    answerOptions.innerHTML = `${answers}`;
  });

  //   setNextQuestion();
}
startGame();

function setNextQuestion() {}
setNextQuestion();
console.log(answerOptions);
