const form = document.querySelector("form");
const firstDate = document.querySelector(".first-date");
const secondDate = document.querySelector(".second-date");
const resultDate = document.querySelector(".data");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstTime = new Date(firstDate.value).getTime();
    const secondTime = new Date(secondDate.value).getTime();
    const differenceDate = Math.abs(firstTime - secondTime);
    const result = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
    resultDate.textContent = `Aradaki fərq ${result} gün`;
});
