function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector('#controls input');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy');
const insertPlaceEl = document.querySelector('#boxes');
let amount = 0;

inputEl.addEventListener('input', countAmount);
createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);

function countAmount() {
  amount = (+inputEl.value);
  return amount;
};
 
function createBoxes() { 
  destroyBoxes();
  let divString = '';
  for (let i = 0; i < amount; i += 1) {
    divString +=`<div style="background-color: ${getRandomHexColor()}; width: ${30+10*i}px; height: ${30+10*i}px;"></div>`
  };
  insertPlaceEl.insertAdjacentHTML('afterbegin', divString);
};

function destroyBoxes() { 
  console.log('destroy');
  insertPlaceEl.innerHTML = '';
  
};