const incBtn = document.querySelector(`[data-action="increment"]`)
const decBtn = document.querySelector(`[data-action="decrement"]`)
const spunEl = document.querySelector(`#value`)
let counterValue = 0

incBtn.addEventListener(`click`, () =>{
    counterValue += 1;
    spunEl.textContent = counterValue;
})

decBtn.addEventListener(`click`, () =>{
    counterValue -= 1
    spunEl.textContent = counterValue;
})

