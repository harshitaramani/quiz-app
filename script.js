const quizData = [
  {
    question: "How old is harshita?",
    a: "19",
    b: "21",
    c: "23",
    d: "25",
    correct: "c",
  },
  {
    question: "What is the most popular programming language in 2023?",
    a: "JavaScript",
    b: "C",
    c: "C++",
    d: "Java",
    correct: "a",
  },
  {
    question: "Who is the President of US?",
    a: "Narendra Modi",
    b: "Donald Trump",
    c: "Ivan Salando",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for",
    a: "Hypertext Markup Language",
    b: "Helicopters Terminals Missiles Lamborginis",
    c: "Host Text Markup Language",
    d: "Hypertext Multiple Language",
    correct: "a",
  },
  {
    question: "When was JS launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAns();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) answer = answerEl.id;
  });
  return answer;
}

function deselectAns() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see answer
  const answer = getSelected();
  // console.log(answer);
  if (answer) {
    // check if ans is correct
    if (answer === quizData[currentQuestion].correct) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) loadQuiz();
    else {
      // show result
      quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions. <\h2> <button onclick = "location.reload()">Reload</button>`;
    }
  }
});
