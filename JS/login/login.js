const buttonLog = document.querySelector('#login');
const buttonCreate = document.querySelector('#create');
const btnOptions = document.querySelectorAll('.btn');
let OptSelected = null
let form = document.querySelector('form')
let urlForm = ''

btnOptions.forEach(e => {
    e.addEventListener('click', (element) => {
        btnOptions.forEach(i => {
            i.parentNode.style.background = 'var(--whiteColor)'
        })
        let component = element.target.parentNode
        component.style.background = 'var(--principalColor)'
        OptSelected = component.textContent.trim();
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
    urlForm = 'b'
    form.action = urlForm

})