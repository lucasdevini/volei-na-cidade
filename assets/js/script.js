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

// -------- Section tabela --------

// -- Variáveis (Section tabela)
const tbody = document.querySelector('tbody')
const linhaTimes = tbody.querySelectorAll('tr')

const valorComparar = []

// Adiciona os valores das células nas variáveis
for (let i = 0; i < linhaTimes.length; i++) {
    const celulas = linhaTimes[i].querySelectorAll('td')
    const valorCelula = []

    for (let j = 0; j < celulas.length; j++) {
        valorCelula.push(parseFloat(celulas[j].textContent) || celulas[j].textContent);
    }

    valorComparar.push(valorCelula)
}

// Compara e ordena os times com base nas vitórias, sets e pontos (linha da tabela)
valorComparar.sort((a,b) => {
    if(a[3] < b[3]) {
        return 1;
    } else if(a[3] > b[3]) {
        return -1;
    } else if(a[3] == b[3] & a[5] < b[5]) {
        return 1;
    } else if(a[3] == b[3] & a[5] > b[5]) {
        return -1;
    } else if(a[3] == b[3] & a[5] == b[5] & a[1] < b[1]) {
        return 1;
    } else if(a[3] == b[3] & a[5] == b[5] & a[1] > b[1]) {
        return -1;
    }
})

// Apagar as linhas da tabela
for (let i = 0; i < linhaTimes.length; i++) {
    tbody.removeChild(linhaTimes[i])
}

// Adicionar as linhas com ordenação
for (let i = 0; i < linhaTimes.length; i++) {
    const linhaTime = document.createElement('tr')
    
    // adicionar os valores às celulas da tabela
    for (let j = 0; j < linhaTimes.length; j++) {
        const celula = document.createElement('td')
        celula.textContent = valorComparar[i][j]

        // Condicionas para adicionar as logos das equipes
        if(celula.textContent.includes('Crias')) {
            const divLogo = document.createElement('div')
            divLogo.classList.add('td-logo_equipe')
            const logoEquipe = document.createElement('img')
            logoEquipe.setAttribute('src', 'assets/imagens/logo-crias.png')
            divLogo.appendChild(logoEquipe)
            celula.appendChild(divLogo)
        }

        if(celula.textContent.includes('Maracanã')) {
            const divLogo = document.createElement('div')
            divLogo.classList.add('td-logo_equipe')
            const logoEquipe = document.createElement('img')
            logoEquipe.setAttribute('src', 'assets/imagens/logo-maracana.png')
            divLogo.appendChild(logoEquipe)
            celula.appendChild(divLogo)
        }

        if(celula.textContent.includes('Open')) {
            const divLogo = document.createElement('div')
            divLogo.classList.add('td-logo_equipe')
            const logoEquipe = document.createElement('img')
            logoEquipe.setAttribute('src', 'assets/imagens/logo-open.png')
            divLogo.appendChild(logoEquipe)
            celula.appendChild(divLogo)
        }

        if(celula.textContent.includes('Santa Maria')) {
            const divLogo = document.createElement('div')
            divLogo.classList.add('td-logo_equipe')
            const logoEquipe = document.createElement('img')
            logoEquipe.setAttribute('src', 'assets/imagens/logo-santa-maria.png')
            divLogo.appendChild(logoEquipe) 
            celula.appendChild(divLogo)
        }

        if(celula.textContent.includes('São Francisco')) {
            const divLogo = document.createElement('div')
            divLogo.classList.add('td-logo_equipe')
            const logoEquipe = document.createElement('img')
            logoEquipe.setAttribute('src', 'assets/imagens/logo-sao-franciso.png')
            divLogo.appendChild(logoEquipe)
            celula.appendChild(divLogo)
        }

        if(celula.textContent.includes('Vaporeon')) {
            const divLogo = document.createElement('div')
            divLogo.classList.add('td-logo_equipe')
            const logoEquipe = document.createElement('img')
            logoEquipe.setAttribute('src', 'assets/imagens/logo-vaporeon.png')
            divLogo.appendChild(logoEquipe)
            celula.appendChild(divLogo)
        }

        linhaTime.appendChild(celula)
    }

    tbody.appendChild(linhaTime)
}

// --- Aplicação (Section tabela)

// -------- Fim Section tabela --------


// - Section rodadas 

// -- Variáveis (Section rodadas)
const setaEsquerda = document.querySelectorAll('.seta-esquerda')
const setaDireita = document.querySelectorAll('.seta-direita')
let sliderJogos = document.querySelector('.jogos')
let moveTabela = 0

// --- Aplicação (Section rodadas)
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



