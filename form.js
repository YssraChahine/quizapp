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

function createCard(question, answer, tag){
    
    const card = document.createElement("article");
    card.classList.add("card");

    const newQuestion = document.createElement("h2");
    newQuestion.textContent = question;
    
    const newAnswer = document.createElement("p");
    newAnswer.textContent = answer;
    newAnswer.hidden = true;

    const button = document.createElement("button");
    button.textContent = "Show Answer";
    button.classList.add("show-answer");

    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("tags");

    const newTag = document.createElement("span");
    newTag.textContent = tag;
    newTag.classList.add("tag");

    tagsContainer.appendChild(newTag);

    card.append(newQuestion, newAnswer, button, tagsContainer);

    return card;
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

    const newCard = createCard(question, answer, tag);

    form.insertAdjacentElement("afterend", newCard);

    form.reset();

    questionCounter.textContent = 150;
    answerCounter.textContent = 150;
});