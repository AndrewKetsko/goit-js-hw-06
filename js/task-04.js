let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});
