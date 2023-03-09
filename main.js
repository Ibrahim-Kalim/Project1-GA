/*-------------- Constants ---------------*/
//created object that have all question
const quizData = [
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
const quiz = document.getElementById("quiz"); //get the id queiz that hold the question
const answerLi = document.querySelectorAll(".answer"); // got all answer by queryselector
const question = document.getElementById("question");// got the h2 by its id

/*---------------- event listeners ------------*/
// startButton.addEventListener("click", startGame);


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
