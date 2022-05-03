

let inputNome = prompt('Digite seu nome:')

let inputIdade = prompt('Digite sua idade:')

let idade = parseInt(inputIdade)

let maiorOuMenor

let mensagemPersonalizada = ''


if (idade >=18) {
    maiorOuMenor = 'maior'
} else if (idade < 18) {
    maiorOuMenor = 'menor'
}

if ( inputNome === 'Thomas Anderson' || inputNome === 'thomas anderson') {
    mensagemPersonalizada = 'Você é personagem do filme The Matrix'
}

let mensagem = `Olá ${inputNome}, você é ${maiorOuMenor} de idade! ${mensagemPersonalizada}`

document.write(mensagem)