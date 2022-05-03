
let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 6


let media = (nota1 + nota2) / 2

console.log(media)

if (media >= mediaMinima) {
    document.write('Ok, passou de ano!')
} else if (media < mediaMinima) {
    document.write ('Ops, não passou de ano!')
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('NOSSA! Você foi muito bem, continue assim!')
} else if (media >= mediaMinima && media === 9) {
    document.write('Você mandou bem! Vamos tentar chegar na média 10?')
} else if (media === mediaMinima) {
    document.write('Parabéns 6 é 10 rsrs')
}