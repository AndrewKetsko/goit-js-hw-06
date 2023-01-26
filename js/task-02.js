const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElements = document.querySelector('#ingredients');
const ingredientsEl = [];

ingredients.forEach(element => {
const ingredientEl = document.createElement('li');
ingredientEl.classList.add('item');
ingredientEl.textContent = element;
ingredientsEl.push(ingredientEl)
});

ingredientsElements.append(...ingredientsEl);
 