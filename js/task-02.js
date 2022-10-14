const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector(`#ingredients`);

const makeList = options =>{
  return options.map(option =>{
    const listEl = document.createElement(`li`);
    listEl.classList.add(`item`);
    listEl.textContent=option;
    return listEl;
  })
}
const list = makeList(ingredients);
listIngredients.append(...list);