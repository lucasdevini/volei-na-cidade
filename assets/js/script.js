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

// - Section rodadas 

// -- Variáveis (Section rodadas)
const setaEsquerda = document.querySelectorAll('.seta-esquerda')
const setaDireita = document.querySelectorAll('.seta-direita')
let sliderJogos = document.querySelector('.jogos')
let moveTabela = 0

// --- Aplicação (Section rodadas)
for (let cont = 0; cont < setaDireita.length; cont++) {
    setaDireita[cont].addEventListener('click', () => {
        if(moveTabela > -300) {
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

// Enviar resultados dos times
const inputTime = document.querySelectorAll('.time input')

// impedir digitos além de 0, 1, 2 ou 3
for (let i = 0; i < inputTime.length; i++) {
    inputTime[i].type = 'number';
    inputTime[i].setAttribute("maxlength", "1");
    inputTime[i].setAttribute("min", "0");
    inputTime[i].setAttribute("max", "3");
    inputTime[i].addEventListener('input', function(e) {
        let value = e.target.value;
        if (value !== '0' && value !== '1' && value !== '2' && value !== '3') {
            e.target.value = value.slice(0, -1);
        }
    });
}

// Seleciona todas as divs "enviar"
const enviar = document.querySelectorAll('.enviar');

// Variáveis do time crias
const tdPontosCrias = document.querySelector('#tr-crias .td-pontos')
const tdJogosCrias = document.querySelector('#tr-crias .td-jogos')
const tdVitoriasCrias = document.querySelector('#tr-crias .td-vitorias')
const tdDerrotasCrias = document.querySelector('#tr-crias .td-derrotas')
const tdSetsCrias = document.querySelector('#tr-crias .td-sets')
let pontosCrias = 0
let jogosCrias = 0
let vitoriasCrias = 0
let derrotasCrias = 0
let setsCrias = 0

// Variáveis do time Maracanã
const tdPontosMaracana = document.querySelector('#tr-maracana .td-pontos')
const tdJogosMaracana = document.querySelector('#tr-maracana .td-jogos')
const tdVitoriasMaracana = document.querySelector('#tr-maracana .td-vitorias')
const tdDerrotasMaracana = document.querySelector('#tr-maracana .td-derrotas')
const tdSetsMaracana = document.querySelector('#tr-maracana .td-sets')
let pontosMaracana = 0
let jogosMaracana = 0
let vitoriasMaracana = 0
let derrotasMaracana = 0
let setsMaracana = 0

    // Adição dos valores à tabela
for (let i = 0; i < enviar.length; i++) {
enviar[i].addEventListener('click', function() {
    // Seleciona os inputs da div clicada
    const inputs = enviar[i].parentNode.querySelectorAll('input');

    // Verifica os valores dos inputs
    const value1 = parseInt(inputs[0].value);
    const value2 = parseInt(inputs[1].value);

    if ((value1 === 3 && value2 === 0) || (value1 === 0 && value2 === 3) || (value1 === 2 && value2 === 1) || (value1 === 1 && value2 === 2)) {
    // Habilita o botão de enviar se os valores atendem às condições
    enviar[i].classList.add('habilitado');

    for (let i = 0; i < inputs.length; i++) {
        // condicional crias
        if(inputs[i].classList.contains('resultado-crias') && inputs[i].value == 3) {
            pontosCrias += 3
            jogosCrias += 1
            vitoriasCrias += 1
            derrotasCrias += 0
            setsCrias += 3

            tdPontosCrias.textContent = pontosCrias
            tdJogosCrias.textContent = jogosCrias
            tdVitoriasCrias.textContent = vitoriasCrias
            tdDerrotasCrias.textContent = derrotasCrias
            tdSetsCrias.textContent = setsCrias
        } else if (inputs[i].classList.contains('resultado-crias') && inputs[i].value == 2) {
            pontosCrias += 2
            jogosCrias += 1
            vitoriasCrias += 1
            derrotasCrias += 0
            setsCrias += 2

            tdPontosCrias.textContent = pontosCrias
            tdJogosCrias.textContent = jogosCrias
            tdVitoriasCrias.textContent = vitoriasCrias
            tdDerrotasCrias.textContent = derrotasCrias
            tdSetsCrias.textContent = setsCrias
        } else if(inputs[i].classList.contains('resultado-crias') && inputs[i].value == 1) {
            pontosCrias += 1
            jogosCrias += 1
            vitoriasCrias += 0
            derrotasCrias += 1
            setsCrias += 1

            tdPontosCrias.textContent = pontosCrias
            tdJogosCrias.textContent = jogosCrias
            tdVitoriasCrias.textContent = vitoriasCrias
            tdDerrotasCrias.textContent = derrotasCrias
            tdSetsCrias.textContent = setsCrias
        } else if(inputs[i].classList.contains('resultado-crias') && inputs[i].value == 0) {
            pontosCrias += 0
            jogosCrias += 1
            vitoriasCrias += 0
            derrotasCrias += 1
            setsCrias += 0

            tdPontosCrias.textContent = pontosCrias
            tdJogosCrias.textContent = jogosCrias
            tdVitoriasCrias.textContent = vitoriasCrias
            tdDerrotasCrias.textContent = derrotasCrias
            tdSetsCrias.textContent = setsCrias
        }
    
        if(inputs[i].classList.contains('resultado-maracana') && inputs[i].value == 3) {
                pontosMaracana += 3
                jogosMaracana += 1
                vitoriasMaracana += 1
                derrotasMaracana += 0
                setsMaracana += 3

                tdPontosMaracana.textContent = pontosMaracana
                tdJogosMaracana.textContent = jogosMaracana
                tdVitoriasMaracana.textContent = vitoriasMaracana
                tdDerrotasMaracana.textContent = derrotasMaracana
                tdSetsMaracana.textContent = setsMaracana
        } else if (inputs[i].classList.contains('resultado-maracana') && inputs[i].value == 2) {
            pontosMaracana += 2
            jogosMaracana += 1
            vitoriasMaracana += 1
            derrotasMaracana += 0
            setsMaracana += 2

            tdPontosMaracana.textContent = pontosMaracana
            tdJogosMaracana.textContent = jogosMaracana
            tdVitoriasMaracana.textContent = vitoriasMaracana
            tdDerrotasMaracana.textContent = derrotasMaracana
            tdSetsMaracana.textContent = setsMaracana
        } else if (inputs[i].classList.contains('resultado-maracana') && inputs[i].value == 1) {
            pontosMaracana += 1
            jogosMaracana += 1
            vitoriasMaracana += 0
            derrotasMaracana += 1
            setsMaracana += 1

            tdPontosMaracana.textContent = pontosMaracana
            tdJogosMaracana.textContent = jogosMaracana
            tdVitoriasMaracana.textContent = vitoriasMaracana
            tdDerrotasMaracana.textContent = derrotasMaracana
            tdSetsMaracana.textContent = setsMaracana
        } else if (inputs[i].classList.contains('resultado-maracana') && inputs[i].value == 0) {
            pontosMaracana += 0
            jogosMaracana += 1
            vitoriasMaracana += 0
            derrotasMaracana += 1
            setsMaracana += 0

            tdPontosMaracana.textContent = pontosMaracana
            tdJogosMaracana.textContent = jogosMaracana
            tdVitoriasMaracana.textContent = vitoriasMaracana
            tdDerrotasMaracana.textContent = derrotasMaracana
            tdSetsMaracana.textContent = setsMaracana
        }
    }    

    // -------- Section tabela --------
        // Cria uma cópia da tabela original
        const tabelaOriginal = document.querySelector('table')
        const tabelaOrdenada = tabelaOriginal.cloneNode(true)
        tabelaOrdenada.classList.add('tabela-nova')

        console.log(tabelaOrdenada)

        const tabelaOrdenadaAnterior = document.querySelector('.tabela-nova')
        if (tabelaOrdenadaAnterior) {
            tabelaOrdenadaAnterior.remove()
        }

        // Seleciona o body da tabela
        const tbody = tabelaOrdenada.querySelector('tbody')
        const linhaTimes = tbody.querySelectorAll('tr')

        const valorComparar = []

        // Adiciona os valores das células nas variáveis
        for (let i = 0; i < linhaTimes.length; i++) {
        const celulas = linhaTimes[i].querySelectorAll('td')
        const valorCelula = []

        for (let j = 0; j < celulas.length; j++) {
            valorCelula.push(parseFloat(celulas[j].textContent) || celulas[j].textContent)
        }

        valorComparar.push(valorCelula)
        }

        // Ordena a tabela por vitórias, sets e pontos
        valorComparar.sort((a, b) => (a[3] < b[3]) ? 1 : (a[3] > b[3]) ? -1 : (a[5] < b[5]) ? 1 : (a[5] > b[5]) ? -1 : (a[1] < b[1]) ? 1 : (a[1] > b[1]) ? -1 : 0)

// Limpa o body da tabela
tbody.innerHTML = ''

// Adiciona as linhas ordenadas ao body da tabela
for (let i = 0; i < linhaTimes.length; i++) {
const linhaTime = document.createElement('tr')

// Adiciona os valores às células da tabela
for (let j = 0; j < linhaTimes.length; j++) {
    const celula = document.createElement('td')
    celula.textContent = valorComparar[i][j]

        // Adiciona as logos das equipes
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

    // Esconde a tabela original e exibe a tabela ordenada
    
}

tabelaOriginal.style.display = 'none'
tabelaOrdenada.style.display = 'table'
tabelaOriginal.parentNode.insertBefore
(tabelaOrdenada, tabelaOriginal.nextSibling)

enviar[i].textContent = 'Enviado';
enviar[i].style.backgroundColor = '#ccc';
enviar[i].removeEventListener('click', arguments.callee);

    alert('resultado atualizado!')
} else {
    // Desabilita o botão de enviar se os valores não atendem às condições
    enviar[i].classList.remove('habilitado');

    alert('não foi possível enviar os resultados! Por favor, digite o valor dos sets corretamente')
}
});
}











