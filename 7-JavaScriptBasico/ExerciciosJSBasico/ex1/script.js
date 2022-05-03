

let nome = prompt ('Escreva seu nome:')
let idade = prompt ('Digite a sua idade:')

if (idade >= 18) {
    document.write(`Olá ${nome}, você é MAIOR de idade!`)
} else if (idade < 18) {
    document.write(`Olá ${nome}, você é MENOR de idade!`)
}