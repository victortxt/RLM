const btnLog = document.querySelectorAll('.btnLog')

btnLog.forEach((e) => {
    e.addEventListener('click', (element) => {
        let opt = element.target.parentNode.querySelector('h3').textContent.trim()

        switch (opt) {
            case 'Coletor':
                location.href = 'file:///C:/Users/user_acronus/Documents/GitHub/RLM/pags/coletor.html'
                break
            case 'Acumulador':
                location.href = 'file:///C:/Users/user_acronus/Documents/GitHub/RLM/pags/acumulador.html'
                break
            case 'Empresa':
                location.href = 'file:///C:/Users/user_acronus/Documents/GitHub/RLM/pags/empresa.html'
                break
        }
    })
})