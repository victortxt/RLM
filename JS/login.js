const buttonsOptMobile = document.querySelectorAll('.btn');
buttonsOptMobile.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.className.indexOf('defaultControl') != -1){
            alert('formularios dos coletores e acumuladores')
        }else{
            alert('formulario das empresas')
        }
    })
});