//menu;

const menu = document.querySelector('#menuBtn');
let navbar = document.querySelector('nav')
const closeMenu = document.querySelector('#closeMenu')
navbar.style.display = 'none'
menu.addEventListener('click', () => {
    navbar.style.display = 'flex'
})

document.querySelector('#closeMenu').addEventListener('click', () => {
    navbar.style.display = 'none'
})