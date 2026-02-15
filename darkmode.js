
const toggle = document.querySelector('[data-js="dark-mode"]');

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", toggle.checked);
});