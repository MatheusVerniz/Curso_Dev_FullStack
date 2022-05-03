/*
    string
    number
    boolean
    array
    object
    undefined
    null
*/

//string
let nome = 'Matheus'    
console.log(nome)

//string - concatenada
let sobrenome = 'Verniz'
//console.log(nome + ' ' + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)

//number
let idade = 23
console.log(idade)

console.log(idade + 10)

//number - float

let porcentagem = 10.2
console.log(porcentagem + '%')

//boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array
let habilidades = ['JavaScript', 'PHP', 'PYTHON']
console.log(habilidades)

console.log(habilidades.length)

console.log(habilidades[0])

//object
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habilidades: ['c++', 'c#', 'python'],
}
console.log(pessoa)
console.log(pessoa.sobrenome)
console.log(pessoa.habilidades[0])

//undefined
let endereco
console.log(endereco)

//null
let cidade = null
console.log(cidade)