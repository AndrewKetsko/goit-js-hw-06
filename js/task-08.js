const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', submitFunc);

function submitFunc(event) {
    event.preventDefault();

    const formDataObject = {};
    const {elements: { email, password }} = event.currentTarget;

    if (email.value === ''
        || password.value === '') {
        alert('All fields must be filled!');
    } else {

        //two different ways to fill the object

        //FIRST
        // formDataObject[email.name] = email.value;
        // formDataObject[password.name] = password.value;

        //SECOND
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, key) => formDataObject[key] = value);
        
    console.log(formDataObject);
    event.currentTarget.reset();

        
    }
}