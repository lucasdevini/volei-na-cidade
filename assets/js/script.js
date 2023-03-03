// Header

// Variáveis
let menu = document.querySelector('header nav')
let botaoMenu = document.querySelector('.menu')
let fecharMenu = document.querySelector('.fechar-menu i')

botaoMenu.addEventListener('click', () => {
    if(menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}) 

fecharMenu.addEventListener('click', () => {
    menu.style.display = 'none'
}) 

// Main 

// Variáveis
const setaEsquerda = document.querySelectorAll('.seta-esquerda')
const setaDireita = document.querySelectorAll('.seta-direita')
let sliderJogos = document.querySelector('.jogos')
let moveTabela = 0

for (let cont = 0; cont < setaDireita.length; cont++) {
    setaDireita[cont].addEventListener('click', () => {
        if(moveTabela > -500) {
            moveTabela -= 100
            sliderJogos.style.marginLeft = moveTabela + 'vw'
        }
    })
}

for (let cont = 0; cont < setaDireita.length; cont++) {
    setaEsquerda[cont].addEventListener('click', () => {
        if(moveTabela < 0) {
            moveTabela += 100
            sliderJogos.style.marginLeft = moveTabela + 'vw'
        }
    })
}



