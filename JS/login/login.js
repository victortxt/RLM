const buttonsOptMobile = document.querySelectorAll('.btn');
const buttonLog = document.querySelector('#login');
const buttonCreate = document.querySelector('#create');
const inputs = document.querySelectorAll('.inputContent');
const submitCreate = document.querySelector('#createSub');
const submitLog = document.querySelector('#loginSub');
let typeText = 'cadastro'
let objDatas = {
    name: '',
    password: '',
    email: '',
}

submitCreate.addEventListener('click', (element) => {
    submitForm(element)
})

submitLog.addEventListener('click', (element) => {
    submitForm(element)
})


function submitForm(element) {
    element.preventDefault();
    let arrayTemp = Array()
    inputs.forEach((e) => {
        arrayTemp.push(e.value);
    })

    objDatas.name = arrayTemp[0]
    objDatas.password = arrayTemp[1]
    objDatas.email = arrayTemp[2]

    for(let i in objDatas){
        if(objDatas[i] === ''){
            alert(`Não foi possível realizar o ${typeText}`);
            break
        }else{
            //aplicar o method AJAX;
        }
    }
}

buttonsOptMobile.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.className.indexOf('defaultControl') != -1){
            document.querySelector('.formEmpresa').style.display = 'none';
            objDatas = {
                name: '',
                password: '',
                email: '',
            }
        }else{
            document.querySelector('.formEmpresa').style.display = 'block';
            objDatas = {
                name: '',
                password: '',
                email: '',
                material:'' 
            }
        }

    })
});

//create or log
buttonLog.addEventListener('click', () => {
    typeText = 'login'
    document.querySelector('#containerCreateAcount').style.display = 'none'
    document.querySelector('#containerLoginAcount').style.display = 'block'
    document.querySelector('.formEmpresa').style.display = 'none';
    document.querySelector('#emailBoxText').style.display = 'none';
    objDatas = {
        name: '',
        password: '',
    }
    
})

buttonCreate.addEventListener('click', () => {
    typeText = 'cadastro'
    document.querySelector('#containerCreateAcount').style.display = 'block'
    document.querySelector('#containerLoginAcount').style.display = 'none'
    document.querySelector('#emailBoxText').style.display = 'flex';
    objDatas = {
        name: '',
        password: '',
        email: '',
    }
})