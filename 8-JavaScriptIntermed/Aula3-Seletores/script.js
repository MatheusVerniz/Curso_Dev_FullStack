//querySelector seleciona apenas um elemento
// Seletor por id
document.querySelector('#titulo').innerHTML = '<i>exemplo</i>'

// Seletor por tag
document.querySelector('a').innerText = '<b>teste ancora</b>'


//selecionando mais de 1 item por tag
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ //funlçao anonima / callback
    elemento.innerHTML = 'teste'
})

//selecionanco mais de 1 item por class
let boxes = document.querySelectorAll('.box')


boxes.forEach(function(box, index){
    box.innerHTML = 'box ' + (index + 1)
})