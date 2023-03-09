/*-------------- Constants ---------------*/
//created object that have all question
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
    C: "Europe",
    d: "North America",
    correct: "a",
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
btn.addEventListener("click", function () {
  const answer = getCheckedAnswer(); // answer is a funtion to get the answer thorugh forEch loop in order to the checked answer to compare with the corect answer
  console.log(answer);
  if (answer == quizData[currentQuiz].correct) score++; // to add to score varible 1 each time you answer the quez
  currentQuiz++; // add one queiz each time to hit submit
  loadQuizDataAndStart(); // added loadQuiz function in order to load the next quiz
});

/*---------------------- function -----------------*/
// created function to load question
function loadQuizDataAndStart() {
  if (currentQuiz < quizData.length) {
    const currentQuizInfo = quizData[currentQuiz]; // to start with the question 1 from object quesData
    question.innerText = currentQuizInfo.question; // to display the question from the object and replace text frm quez to the id question
    a_text.innerText = currentQuizInfo.a; // display the choice from object to inside html li chice
    b_text.innerText = currentQuizInfo.b; // display the choice from object to inside html li chice
    c_text.innerText = currentQuizInfo.c; // display the choice from object to inside html li chice
    d_text.innerText = currentQuizInfo.d; // display the choice from object to inside html li chice
  } else {
    // if there there is no more quiz to load created button to restart the gaem
    quiz.innerHTML = `
  <h3 class= "score_text">You have answered ${score}/${quizData.length}</h3>
  <button class="btn_btn_start" onClick="location.reload()">Restart</button>`;
  }
}
loadQuizDataAndStart();

// created function to ckeck the answer to check whic choices the player chose only by looping through all the choices
function getCheckedAnswer() {
  let answer = 0;
  // usging the answerLi that catched all the answers (li elemnt) choices from choices
  answerLi.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}
