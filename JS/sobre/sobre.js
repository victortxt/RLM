const slideSquare2 = document.querySelector('.img2sobre')
const slideSquare1 = document.querySelector('.img1sobre')

let idSlide = 0
let urlImage = {
    url1: '',
    url2: ''
}

function typeOfImgSlide(condition){
    switch (condition) {
        case 0:
            urlImage.url1 = '../../img/IMG_7485.JPG'
            urlImage.url2 = '../../img/IMG_7659.jpg'
            break
        case 1: 
            urlImage.url1 = '../../img/IMG_7498.JPG'
            urlImage.url2 = '../../patrick'
            break
        case 2:
            urlImage.url1 = '../../img/IMG_7661.jpg'
            urlImage.url2 = '../../img/IMG_7658.JPG'
            break
    }

    slideSquare2.style.backgroundImage = `url(${urlImage.url2})`
    slideSquare1.style.backgroundImage = `url(${urlImage.url1})`
}

document.querySelector('#btnLeft').addEventListener('click', () => {
    if(idSlide > 0){
        idSlide--
        typeOfImgSlide(idSlide)
    }
    
})

document.querySelector('#btnRight').addEventListener('click', () => {
    if(idSlide < 2){
        idSlide++
        typeOfImgSlide(idSlide)
    }
})

// Variáveis para controlar o ID e a posição anterior do scroll
let currentId = 60;
let prevScrollPos = window.pageYOffset;

// Função para atualizar o ID com base no movimento do scroll
function updateIdOnScroll() {
    const currentScrollPos = window.pageYOffset;
    const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';

    if (scrollDirection === 'up') {
        // Rolar para cima: aumentar o ID
        if(currentId !== 60){
            currentId = currentId + 20;
        }

        if(currentId === 60){
            document.querySelector('.buttons-slide').style.display = 'flex'
        }
        
    } else {
        // Rolar para baixo: diminuir o ID
        if(currentId !== 0 ){
            currentId = currentId - 20;
        }

        document.querySelector('.buttons-slide').style.display = 'none'
    }

    // Atualizar a posição anterior do scroll
    prevScrollPos = currentScrollPos;

    // Exemplo de uso: imprime o ID atual no console
    console.log(`ID atual: ${currentId}`);
    document.querySelector('#Bg').style.height = currentId + 'vh'
}

// Adicione um listener para o evento de scroll
window.addEventListener('scroll', updateIdOnScroll);


