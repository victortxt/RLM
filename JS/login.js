const buttonsOptMobile = document.querySelectorAll('.btn');
const buttonLogs = document.querySelector('.logWay');
buttonsOptMobile.forEach(element => {
    element.addEventListener('click', (e) => {
        const condition = e.target.className.indexOf('defaultControl')
        const action = document.querySelector('.formEmpresa');
        displays(condition, action)
        
    })
});

function displays(condition, action) {
    if(condition != -1){
        action.style.display = 'none'
    }else{
        action.style.display = 'block'
    }
}