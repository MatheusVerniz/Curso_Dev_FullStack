
const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

const formCadastro = document.querySelector('#formCadastro')
const selectEstados = document.querySelector('#selectEstados')
const selectCidades = document.querySelector('#selectCidades')
const divCidades = document.querySelector('#divCidades')

selectEstados.onchange = function(e){
    const estado = e.target.value

    let listaCidades

    if (estado === 'sp'){
        listaCidades = cidades.sp
    }

    if (estado === 'rj'){
        listaCidades = cidades.rj
    }

    let htmlCidades = `<option value=''>--Selecione a Cidade--</option>`

    for (let cidade of listaCidades){
        htmlCidades += `<option value='${cidade}'>${cidade}</option>`
    }

    selectCidades.innerHTML = htmlCidades
    divCidades.classList.add('visible')
}

formCadastro.onsubmit = function(e){
    e.preventDefault()

    let temErro = false
    let selectEstados = document.forms['formCadastro']['estado']
    let selectCidades = document.forms['formCadastro']['cidade']

    if(!selectEstados.value){
        temErro = true
        selectEstados.classList.add('inputError')

        let span = selectEstados.nextSibling.nextSibling
        span.innerText = 'Selecione o estado'
    } else {
        selectEstados.classList.remove('inputError')

        let span = selectEstados.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!selectCidades.value){
        temErro = true
        selectCidades.classList.add('inputError')

        let span = selectCidades.nextSibling.nextSibling
        span.innerText = 'Selecione a cidade'
    } else {
        selectCidades.classList.remove('inputError')

        let span = selectCidades.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()
    }
}