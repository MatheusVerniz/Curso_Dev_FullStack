
let contador = document.querySelector('#contador')
let botaoMenos = document.querySelector('#botaoMenos')
let botaoMais = document.querySelector('#botaoMais')

let count = 0

function subtracao(){
    count--
    contador.innerHTML = count
}

function soma(){
    count++
    contador.innerHTML = count
}

botaoMenos.addEventListener("click", subtracao)
botaoMais.addEventListener('click', soma)