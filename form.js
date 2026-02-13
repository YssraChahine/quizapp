// Form
const questionInput = document.querySelector('[data-js="question"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');
const form = document.querySelector('[data-js="form"]');

questionInput.addEventListener("input", (event) =>{
    questionCounter.textContent = 150 - event.target.value.length;
});

const answerInput = document.querySelector('[data-js="answer"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');
const tagInput = document.querySelector('[data-js="tag"]');

answerInput.addEventListener("input", (event) =>{
    answerCounter.textContent = 150 - event.target.value.length;
});

const error = document.createElement("p");
error.style.color = "red";
tagInput.insertAdjacentElement("afterend", error);

function showTagError() {
    error.textContent = "Only one word is allowed";
}

function hideTagError() {
    error.textContent = "";
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    if (tagInput.value.includes(" ")){
        showTagError();
        return;
    }

    hideTagError();

    const question = questionInput.value;
    const answer = answerInput.value;
    const tag = tagInput.value;

    console.log(question, answer, tag);

    form.reset();

    questionCounter.textContent = 150;
    answerCounter.textContent = 150;
});




