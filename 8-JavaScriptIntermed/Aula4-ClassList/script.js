

let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let menuAberto = false  //flag (padrão)

function abrirOuFecharMenu() {

    if (menuAberto === true){
        menuAberto = false
        menuMobile.classList.remove('aberto') //Remove a classe
        botaoMenu.innerText = 'Abrir menu'  //Muda o texto
    } else if (menuAberto === false) {
        menuAberto = true
        menuMobile.classList.add('aberto') //Adiciona a classe
        botaoMenu.innerText = 'Fechar menu' //Muda o texto
    }

}