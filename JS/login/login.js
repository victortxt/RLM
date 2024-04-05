const buttonLog = document.querySelector('#login');
const buttonCreate = document.querySelector('#create');
const buttonBtnOption = document.querySelectorAll('.btn')
const lineBtn = document.querySelectorAll('.buttonsLine')
let pCareer = document.querySelector('#textCareer')
let form = document.querySelector('form')
let urlForm = ''
let textCareer = ""
pCareer.style.display = 'none'
document.querySelector('#titleSelected').style.display = 'none'



function submitForm(){
    let state
    document.querySelectorAll('.inputContent').forEach((e) => {
        if(e.value != '' && document.querySelector('.selectedInput').querySelector('input').value != ''){
            state = true
        }else{
            state = false
        }
    })
    if(state === true){
        document.querySelector('form').submit()
    }else{
        alert('ERRO: verifique se os dados estão preenchidos')
    }
}

document.querySelector('#createSub').addEventListener('click', (e) => {
    e.preventDefault()
    submitForm()
})
document.querySelector('#loginSub').addEventListener('click', (e) => {
    e.preventDefault()
    submitForm()
})


buttonBtnOption.forEach(e => {
    e.addEventListener('click', (element) => {
    document.querySelector('.selectedInput').style.display = 'flex'
        buttonBtnOption.forEach(e => {
            e.parentNode.style.background = 'var(--whiteColor)'
            
        })
        let btnTouched = element.target
        if(document.querySelector('.SquareEffect')){
            if(e.parentNode.className === 'SquareEffect'){
                btnTouched.parentNode.style.background = 'var(--principalColor)'
                document.querySelector('.selectedInput').querySelector('input').value = btnTouched.textContent.trim()
                document.querySelector('#titleSelected').innerHTML = btnTouched.textContent.trim()
                document.querySelector('#titleSelected').style.display = 'block'
            }

        }else{
            btnTouched.style.background = 'var(--principalColor)'
        }
        switch(btnTouched.textContent.trim()){
            case 'Coletor':
                urlImg = '../../img/IMG_7485.JPG'
                textCareer = 'Coletores, vocês são responsáveis em garantir a sustentabilidade do meio ambiente através de um trabalho de coletar o lixo e entregar para uma empresa.'
            break
            case 'Acumulador':
                urlImg = '../../img/IMG_7498.JPG'
                textCareer = 'Acumuladores, vocês são responsáveis em armazenar materiais e disponibilizar os produtos recicláveis para os coletores.'
            break
            case 'Empresa':
                urlImg = '../../img/IMG_7661.jpg'
                textCareer = 'Empresas, vocês são responsáveis na monetização e na obtenção dos materiais.'
            break
        }
        pCareer.style.display = 'block'
        document.querySelector('#imgBackground').style.backgroundImage = `url(${urlImg})`

        document.querySelector('.textIndentify').textContent = textCareer
        //
        pCareer.textContent =  textCareer     
    })
    
})

buttonLog.addEventListener('click', () => {
    document.querySelector('#containerCreateAcount').style.display = 'none'
    document.querySelector('#containerLoginAcount').style.display = 'block'
    document.querySelector('#emailBoxText').style.display = 'none';
    document.querySelector('.buttonsLine').style.display = 'none';
    document.querySelector('.btnLineDesk').style.display = 'none';
    document.querySelector('.noneTextBasic').textContent = 'Área de login'
    document.querySelector('.textIndentify').style.display = 'none';
    document.querySelector('.selectedInput').style.display = 'none'
    document.querySelector('#imgBackground').style.display = 'none'

    urlForm = 'a'
    form.action = urlForm
})

buttonCreate.addEventListener('click', () => {
    document.querySelector('#containerCreateAcount').style.display = 'block'
    document.querySelector('#containerLoginAcount').style.display = 'none'
    document.querySelector('#emailBoxText').style.display = 'flex';
    document.querySelector('.buttonsLine').style.display = 'flex'
    document.querySelector('.btnLineDesk').style.display = 'flex';
    document.querySelector('.noneTextBasic').textContent = 'Selecione quem é você';
    document.querySelector('.textIndentify').style.display = 'block';
    document.querySelector('.selectedInput').style.display = 'flex'
    if(window.screen.availWidth >= 1000 ){
        document.querySelector('#imgBackground').style.display = 'flex'
        console.log(window.screen.availWidth)
        console.log('teste')
    }
    urlForm = 'b'
    form.action = urlForm

})