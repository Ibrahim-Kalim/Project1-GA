/*-------------- Constants ---------------*/
const questions = {
  question: "Where is the hightest mountain in the world located?",
  answers: [
    { text: "Nepal", correct: true },
    { text: "Denali", correct: false },
    { text: "Dubai", correct: false },
    { text: "India", correct: false },
  ],
};

//   {
//     question: "What is the capital of Thailand?",
//     answers: [
//       { text: "Bangkok", correct: true },
//       { text: "Hanoi", correct: false },
//       { text: "Caracas", correct: false },
//       { text: "Bogota", correct: false },
//     ],
//   },
// ];

/*-------------------- app's state (variables) ----------- */

/*---------------- cached element ----------------*/
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question");
const answerOptions = document.querySelectorAll(".btn");
const checkAnswer = document.getElementById("eva-btn");
const checkAn = document.getElementById("answer-buttons");
/*---------------- event listeners ------------*/
// startButton.addEventListener("click", startGame);

checkAn.addEventListener("click", function (evt) {
  let y = evt.target;
  console.log(y);
  for (let i = 0; i < questions.answers.length; i++) {
    console.log(questions.answers[i]);
  }
});

/*---------------------- function -----------------*/
function startGame() {
  questionContainer.innerHTML = `${questions.question}`;
  let answerList = questions.answers.forEach(function (el, ind) {
    answerOptions[ind].innerHTML = el.text;
    // console.log(answerOptions[ind].innerHTML);
    console.log(el.text);
  });
}

startGame();

//   setNextQuestion();

function checkA() {
  if (answers.correct) {
  }
}
checkA();
