function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector('#controls input');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy');
const insertPlaceEl = document.querySelector('#boxes');
let amount = 0;
let width = 30;
let height = 30;
let total = 0;

inputEl.addEventListener('input', countAmount);
createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);

function countAmount() {
  // amount = (+inputEl.value) > 100 ? 100 : (+inputEl.value);
  if (+inputEl.value > 100) {
    alert('Maximum q-ty of squares are 100!!!')
    inputEl.value = 100;
    amount = 100;
  } else { amount = (+inputEl.value) }
  return amount;
};
 
function createBoxes() { 
  // destroyBoxes();
  let divString = '';

  if (total >= 100) {
    alert('You reached maximum of squares!!!');
  }
  
  for (let i = 0; i < amount; i += 1) {
    width += 10 * i;
    height += 10 * i;
    divString +=`<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px;"></div>`
  };
  insertPlaceEl.insertAdjacentHTML('beforeend', divString);
  width += 10;
  height += 10;
  total += amount;
  inputEl.value = 0;
};

function destroyBoxes() { 
  insertPlaceEl.innerHTML = '';
  width = 30;
  height = 30;
  total = 0; 
  amount = 0;
};