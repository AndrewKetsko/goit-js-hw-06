const inputEl = document.querySelector('#validation-input');
const dataLength = +inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', () => {

    if (inputEl.value.trim().length === dataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});
