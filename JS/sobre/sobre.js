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
function updateIdOnScroll() {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition)

    const divElement = document.querySelector("#Bg");

    if (scrollPosition < 30) {
        $(divElement).fadeIn("slow");
    }
    else{
        $(divElement).fadeOut("slow");
    }

}

// Call the function when the window is scrolled
window.addEventListener("scroll", updateIdOnScroll);