const quizData = [
  {
    question: "In which Italian city can you find the Colosseum?",
    a: "Venice",
    b: "Rome",
    c: "Naples",
    d: "Milan",
    correct: "b",
  },
  {
    question: "What is the largest active volcano in the world?",
    a: "Mount Etna",
    b: "Mount Vesuvius",
    c: "Mouna Loa",
    d: "Mount Batur",
    correct: "c",
  },
  {
    question: "What is the largest continent in size?",
    a: "Asia",
    b: "Africa",
    c: "Europe",
    d: "North America",
    correct: "a",
  },
  {
    question: "What is the only food that cannot go bad?",
    a: "Dark chocolate",
    b: "Peanut butter",
    c: "Canned tuna",
    d: "Honey",
    correct: "d",
  },
];

let currentQuiz = 0;
let score = 0;
let answer = 0;

const answerLi = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text"); //
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  answer = getCheckedAnswer();

  if (answer === quizData[currentQuiz].correct) score++;
  currentQuiz++;

  loadQuiz();
  deSelect();
});

function loadQuiz() {
  if (currentQuiz < quizData.length) {
    const currentQuizInfo = quizData[currentQuiz];
    question.innerText = currentQuizInfo.question;
    a_text.innerText = currentQuizInfo.a;
    b_text.innerText = currentQuizInfo.b;
    c_text.innerText = currentQuizInfo.c;
    d_text.innerText = currentQuizInfo.d;
  } else {
    quiz.innerHTML = `
  <h3 class= "score_text">You have answered ${score} < ${quizData.length} try again</h3>
  <button class="btn_btn_start" onClick="location.reload()">Restart</button>`;
  }
}
loadQuiz();

function deSelect() {
  answerLi.forEach((ele) => {
    ele.checked = false;
  });
}

function getCheckedAnswer() {
  answerLi.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}
