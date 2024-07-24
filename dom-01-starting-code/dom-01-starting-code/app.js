// document.getElementById("main-title");
// document.getElementsByClassName("main-title")[0].innerHTML = "Welcome to the DOM!";

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const toggleVisibilityButton = document.getElementById('toggle-visibility');

section.className = 'red-bg';

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }
    //^^As above so below
    section.classList.toggle('invisible');
});
