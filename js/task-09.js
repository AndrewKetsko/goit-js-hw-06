function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');


btnEl.addEventListener('click', changeColor);

function changeColor(event) {
  textEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = textEl.textContent;
}