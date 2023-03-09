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
let currentQuiz = 0; // to follow which quiz am I
let score = 0; // to start score by 0 and later to add up

/*---------------- cached element ----------------*/
const quiz = document.getElementById("quiz"); //get the id queiz that hold the question
const answerLi = document.querySelectorAll(".answer"); // got all answer by queryselector
const question = document.getElementById("question"); // got the h2 by its id
const a_text = document.getElementById("a_text"); // get the choice li by the id
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn"); // got the button by its id

/*---------------- event listeners ------------*/

/*---------------------- function -----------------*/
function loadQuizDataAndStart() {
  if (currentQuiz < quizData.length) {
    const currentQuizInfo = quizData[currentQuiz];
    question.innerHTML = currentQuizInfo.question;
    question.innerText = currentQuizInfo.question;
    a_text.innerText = currentQuizInfo.a;
    b_text.innerText = currentQuizInfo.b;
    c_text.innerText = currentQuizInfo.c;
    d_text.innerText = currentQuizInfo.d;
  } else {
    quiz.innerHTML = `
  <h3 class= "score_text">You have answered ${score}/${quizData.length}</h3>
  <button class="btn_btn_start" onClick="location.reload()">Restart</button>`;
  }
};

