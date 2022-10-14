const inputEl = document.querySelector(`#font-size-control`)
const spanEl = document.querySelector(`#text`)

inputEl.addEventListener(`input`, chengeFontSize);

function chengeFontSize (event) {
    spanEl.style.fontSize = event.currentTarget.value + "px"
}