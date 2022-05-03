
function entrar() {
    
    let inputNome = prompt('Digite seu nome:')

    let inputIdade = prompt('Digite sua idade:')

    let idade = parseInt(inputIdade)

    let maiorOuMenor

    if (inputNome === '', inputIdade === '') {
        alert('Preencha os campos corretamente!')
        return
    }

    if (idade >=18) {
        maiorOuMenor = 'maior'
    } else if (idade < 18) {
        maiorOuMenor = 'menor'
    }

    let mensagemPersonalizada = ''

    if ( inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson') {
        mensagemPersonalizada = 'Você é personagem do filme The Matrix'
    }

  

    let saudacao = `Olá ${inputNome}, você é ${maiorOuMenor} de idade!`

    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
}