/*
btnLeft
btnRight
*/

document.querySelector('#btnLeft').addEventListener('click', () => {
    alert('esquerda')
})

document.querySelector('#btnRight').addEventListener('click', () => {
    alert('direita')
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
        if(currentId !== 0){
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


