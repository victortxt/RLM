const buttonsOptMobile = document.querySelectorAll('.btn');
const buttonLogs = document.querySelector('.logWay');
buttonsOptMobile.forEach(element => {
    element.addEventListener('click', (e) => {
        const condition = e.target.className.indexOf('defaultControl')
        const action = document.querySelector('.formEmpresa');
        if(displays(condition, action)){
            action.style.display = 'none' 
        }else{
            action.style.display = 'block'
        }
        
    })
});

buttonLogs.forEach(element => {
    element.addEventListener('click', (e) => {
        const condition = e.target.className.indexOf('join')
        const action = logInteration;
        function logInteration() {
            alert('teste') 
        }

        if(displays(condition, action)){
            //implementar a lógica
        }
    })
});




function displays(condition, action) {
    if(condition != -1){
        return true
    }else{
        return false
    }
}