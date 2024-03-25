const buttonLog = document.querySelector('#login');
const buttonCreate = document.querySelector('#create');
const buttonBtnOption = document.querySelectorAll('.btn')
const lineBtn = document.querySelectorAll('.buttonsLine')
let form = document.querySelector('form')
let urlForm = ''


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
            if(document.querySelector('.SquareEffect').style.display === 'block'){
                e.parentNode.style.background = 'var(--whiteColor)'
            }else{
                buttonBtnOption.style.background = 'var(--whiteColor)'
            }
        })
        let btnTouched = element.target
        if(document.querySelector('.SquareEffect').style.display === 'block'){
            console.log('este')
            btnTouched.parentNode.style.background = 'var(--principalColor)'
            document.querySelector('.selectedInput').querySelector('input').value = btnTouched.textContent.trim()
        }else{
            btnTouched.style.background = 'var(--principalColor)'
        }
        
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
    urlForm = 'b'
    form.action = urlForm

})