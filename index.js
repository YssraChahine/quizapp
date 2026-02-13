console.clear();

const bookmark = document.querySelector('[data-js=bookmark-clicked]')

bookmark.addEventListener("click", ()=>{
    bookmark.classList.toggle("active");
})

const answerButton = document.querySelector('[data-js="answer-button"]');
const ShowAnswer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () =>{
    ShowAnswer.toggleAttribute("hidden");
    answerButton.textContent = ShowAnswer.hasAttribute("hidden") ? "Show Answer" : "Hide Answer";
})