const nameColor = document.querySelector(`.color`)
const btnEl = document.querySelector(`.change-color`)
const bodyEl = document.querySelector(`body`)


function getRandomHexColor() {
  const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(newColor);
  bodyEl.style.background = newColor;
  nameColor.textContent = newColor;
  return 
}


btnEl.addEventListener(`click`, () => getRandomHexColor());

