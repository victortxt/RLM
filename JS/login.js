const buttonsOptMobile = document.querySelectorAll('.btn');
const buttonLog = document.querySelector('#login');
const buttonCreate = document.querySelector('#create');
let materialsSelected = Array();



buttonsOptMobile.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.className.indexOf('defaultControl') != -1){
            document.querySelector('.formEmpresa').style.display = 'none';
        }else{
            document.querySelector('.formEmpresa').style.display = 'block';
        }
    })
});

buttonLog.addEventListener('click', () => {
    document.querySelector('#containerCreateAcount').style.display = 'none'
    document.querySelector('#containerLoginAcount').style.display = 'block'
})

buttonCreate.addEventListener('click', () => {
    document.querySelector('#containerCreateAcount').style.display = 'block'
    document.querySelector('#containerLoginAcount').style.display = 'none'
})