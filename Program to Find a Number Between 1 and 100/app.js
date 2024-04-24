const button = document.querySelector("button");
const input = document.querySelector("input");
const higherLowerSpan = document.querySelector(".higher-lower");
const countValue = document.querySelector(".count-Value");
const lastWin = document.querySelector(".Last-Win");
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let count = 0;

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (!inputValue) {
        alert("Fill in the input");
    } else if (isNaN(inputValue)) {
        alert("Input must be a number");
    } else if (inputValue > 100 || inputValue < 0) {
        alert("Write numbers smaller than 100");
    } else {
        count++;
        if (inputValue > randomNumber) {
            higherLowerSpan.textContent = "Higher";
        } else if (randomNumber > inputValue) {
            higherLowerSpan.textContent = "Lower";
        } else {
            const lastCount = count;
            count = 0;
            higherLowerSpan.textContent="";
            alert("Winner");
            lastWin.textContent=`Count ${lastCount}`;
        }
        countValue.textContent=count;
    }
});