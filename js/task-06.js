const inputEl = document.querySelector(`#validation-input`);
const inputValidLength = document.querySelector(`[data-length="6"]`);
console.log(inputValidLength.dataset.length);
inputEl.addEventListener(`blur`, onInputChange);

function onInputChange(event){
    inputEl.classList.remove(`valid`);
    inputEl.classList.remove(`invalid`);

    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length>=inputValidLength.dataset.length){
        inputEl.classList.add(`valid`)
    } else inputEl.classList.add(`invalid`)
    
}


