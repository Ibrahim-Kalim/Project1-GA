/*-------------- Constants ---------------*/
const questions = [
  {
    question: "Where is the hightest mountain in the world located?",
    a: "Nepal",
    b: "Denali",
    c: "Dubai",
    d: "India",
    correct: "a",
  },
  {
    question: "What is the capital of Thailand?",
    a: "Bangkok",
    b: "Hanoi",
    c: "Caracas",
    d: "Bogota",
    correct: "d",
  },
];

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
  let eventTarget = evt.target.textContent;
  console.log(eventTarget);
  questions.answers.forEach(function (el, ind) {
    if (eventTarget === el.correct) {
      console.log(answers.correct);
    }
  });
  //   for (let i = 0; i < questions.answers.length; i++) {

  // //     let answerResult = [];
  //     answerResult += questions.answers[i];
  // //     if (eventTarget === answerResult) {
  // //     }
  //   }
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
