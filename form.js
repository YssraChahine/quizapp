// Form
const questionInput = document.querySelector('[data-js="question"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');

questionInput.addEventListener("input", (event) =>{
    questionCounter.textContent = 150 - event.target.value.length;
});

const answerInput = document.querySelector('[data-js="answer"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');

answerInput.addEventListener("input", (event) =>{
    answerCounter.textContent = 150 - event.target.value.length;
});
