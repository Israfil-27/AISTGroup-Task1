const button =document.querySelector("button")
const inputValue =document.querySelector("input")
const pathResult =document.querySelector(".path")
const queryResult =document.querySelector(".query")

button.addEventListener("click",(event)=>{
    event.preventDefault()
    const location =new URL(inputValue.value)
    pathResult.textContent=location.pathname
    queryResult.textContent=location.searchParams
})