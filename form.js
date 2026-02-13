// Form
const questionInput = document.querySelector('[data-js="question"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');

questionInput.addEventListener("input", (event) =>{
    questionCounter.textContent = 150 - event.target.value.length;
});

