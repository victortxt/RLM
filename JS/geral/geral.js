//menu;

const menu = document.querySelector('#menuBtn');
menu.addEventListener('click', () => {
    var element = document.querySelector(".navBar");
    element.classList.toggle("none");
})