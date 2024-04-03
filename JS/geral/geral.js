//menu;

const menu = document.querySelector('#menuBtn');
let navbar = document.querySelector('#navBar')
const closeMenu = document.querySelector('#closeMenu')

menu.addEventListener('click', () => {
        document.querySelector('nav').style.display = 'flex'
})

document.querySelector('#closeMenu').addEventListener('click', () => {
    document.querySelector('nav').style.display = 'none'
})