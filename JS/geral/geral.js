//menu;

const menu = document.querySelector('#menuBtn');
let navbar = document.querySelector('#navBar')
let id = 0
menu.addEventListener('click', () => {
    if(id === 0){
        document.querySelector('nav').style.display = 'block'
        id++
    }else{
        document.querySelector('nav').style.display = 'none'
        id--
    }
})