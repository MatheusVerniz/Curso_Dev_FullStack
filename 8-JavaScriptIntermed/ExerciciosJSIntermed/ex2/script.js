let contador = document.querySelector('#contador')
let botaoMenos = document.querySelector('#botaoMenos')
let botaoMais = document.querySelector('#botaoMais')

let count = 0

let diminuirIntervalo
let aumentarIntervalo

botaoMenos.onclick = function(){
    clearInterval(aumentarIntervalo)

    diminuirIntervalo = setInterval(function(){
        count--
        contador.innerText = count
    }, 100)

    botaoMenos.classList.add('botaoVermelho')
    botaoMais.classList.remove('botaoVerde')
}

botaoMais.onclick = function(){
    clearInterval(diminuirIntervalo)

    aumentarIntervalo = setInterval(function(){
        count++
        contador.innerText = count
    }, 100)

    botaoMais.classList.add('botaoVerde')
    botaoMenos.classList.remove('botaoVermelho')
}
