console.clear();

const bookmark = document.querySelector('[data-js=bookmark-clicked]')

bookmark.addEventListener("click", ()=>{
    bookmark.classList.toggle("active");
})