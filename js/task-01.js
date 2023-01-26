const numberOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberOfCategories.length}`);
console.log('')

numberOfCategories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    // console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`)
    console.log('')
});