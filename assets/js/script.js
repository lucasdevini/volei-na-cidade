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

// Esconder os tds com class desempatar
const desempatar = document.querySelectorAll('.desempatar')

for (let i = 0; i < desempatar.length; i++) {
    desempatar[i].style.display = 'none'
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

// Variáveis do time Open
const tdPontosOpen = document.querySelector('#tr-open .td-pontos')
const tdJogosOpen = document.querySelector('#tr-open .td-jogos')
const tdVitoriasOpen = document.querySelector('#tr-open .td-vitorias')
const tdDerrotasOpen = document.querySelector('#tr-open .td-derrotas')
const tdSetsOpen = document.querySelector('#tr-open .td-sets')

let pontosOpen = 0
let jogosOpen = 0
let vitoriasOpen = 0
let derrotasOpen = 0
let setsOpen = 0

// Variáveis do time Santa Maria
const tdPontosSantaMaria = document.querySelector('#tr-santa_maria .td-pontos')
const tdJogosSantaMaria = document.querySelector('#tr-santa_maria .td-jogos')
const tdVitoriasSantaMaria = document.querySelector('#tr-santa_maria .td-vitorias')
const tdDerrotasSantaMaria = document.querySelector('#tr-santa_maria .td-derrotas')
const tdSetsSantaMaria = document.querySelector('#tr-santa_maria .td-sets')

let pontosSantaMaria = 0
let jogosSantaMaria = 0
let vitoriasSantaMaria = 0
let derrotasSantaMaria = 0
let setsSantaMaria = 0

// Variáveis do time São Francisco
const tdPontosSaoFrancisco = document.querySelector('#tr-sao_francisco .td-pontos')
const tdJogosSaoFrancisco = document.querySelector('#tr-sao_francisco .td-jogos')
const tdVitoriasSaoFrancisco = document.querySelector('#tr-sao_francisco .td-vitorias')
const tdDerrotasSaoFrancisco = document.querySelector('#tr-sao_francisco .td-derrotas')
const tdSetsSaoFrancisco = document.querySelector('#tr-sao_francisco .td-sets')

let pontosSaoFrancisco = 0
let jogosSaoFrancisco = 0
let vitoriasSaoFrancisco = 0
let derrotasSaoFrancisco = 0
let setsSaoFrancisco = 0

// Variáveis do time Vaporeon
const tdPontosVaporeon = document.querySelector('#tr-vaporeon .td-pontos')
const tdJogosVaporeon = document.querySelector('#tr-vaporeon .td-jogos')
const tdVitoriasVaporeon = document.querySelector('#tr-vaporeon .td-vitorias')
const tdDerrotasVaporeon = document.querySelector('#tr-vaporeon .td-derrotas')
const tdSetsVaporeon = document.querySelector('#tr-vaporeon .td-sets')

let pontosVaporeon = 0
let jogosVaporeon = 0
let vitoriasVaporeon = 0
let derrotasVaporeon = 0
let setsVaporeon = 0

// Desempatar confronto direto
const botaoDesempatar = document.querySelectorAll('.botao-desempatar')

const tdDesempatar = document.querySelectorAll('.desempatar')

let tdDesempatarCrias = 0
let tdDesempatarMaracana = 0
let tdDesempatarOpen = 0
let tdDesempatarSantaMaria = 0
let tdDesempatarSaoFrancisco = 0
let tdDesempatarVaporeon = 0

// Dinâmica da tabela
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
        // Valores crias
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
        
        // Valores Maracanã
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

        // Valores Open
        if(inputs[i].classList.contains('resultado-open') && inputs[i].value == 3) {
            pontosOpen += 3
            jogosOpen += 1
            vitoriasOpen += 1
            derrotasOpen += 0
            setsOpen += 3

            tdPontosOpen.textContent = pontosOpen
            tdJogosOpen.textContent = jogosOpen
            tdVitoriasOpen.textContent = vitoriasOpen
            tdDerrotasOpen.textContent = derrotasOpen
            tdSetsOpen.textContent = setsOpen
        } else if (inputs[i].classList.contains('resultado-open') && inputs[i].value == 2) {
            pontosOpen += 2
            jogosOpen += 1
            vitoriasOpen += 1
            derrotasOpen += 0
            setsOpen += 2

            tdPontosOpen.textContent = pontosOpen
            tdJogosOpen.textContent = jogosOpen
            tdVitoriasOpen.textContent = vitoriasOpen
            tdDerrotasOpen.textContent = derrotasOpen
            tdSetsOpen.textContent = setsOpen
            tdSetsCrias.textContent = setsCrias
        } else if(inputs[i].classList.contains('resultado-open') && inputs[i].value == 1) {
            pontosOpen += 1
            jogosOpen += 1
            vitoriasOpen += 0
            derrotasOpen += 1
            setsOpen += 1

            tdPontosOpen.textContent = pontosOpen
            tdJogosOpen.textContent = jogosOpen
            tdVitoriasOpen.textContent = vitoriasOpen
            tdDerrotasOpen.textContent = derrotasOpen
            tdSetsOpen.textContent = setsOpen
        } else if(inputs[i].classList.contains('resultado-open') && inputs[i].value == 0) {
            pontosOpen += 0
            jogosOpen += 1
            vitoriasOpen += 0
            derrotasOpen += 1
            setsOpen += 0

            tdPontosOpen.textContent = pontosOpen
            tdJogosOpen.textContent = jogosOpen
            tdVitoriasOpen.textContent = vitoriasOpen
            tdDerrotasOpen.textContent = derrotasOpen
            tdSetsOpen.textContent = setsOpen
        }

        // Valores Santa Maria
        if(inputs[i].classList.contains('resultado-santa-maria') && inputs[i].value == 3) {
            pontosSantaMaria += 3
            jogosSantaMaria += 1
            vitoriasSantaMaria += 1
            derrotasSantaMaria += 0
            setsSantaMaria += 3

            tdPontosSantaMaria.textContent = pontosSantaMaria
            tdJogosSantaMaria.textContent = jogosSantaMaria
            tdVitoriasSantaMaria.textContent = vitoriasSantaMaria
            tdDerrotasSantaMaria.textContent = derrotasSantaMaria
            tdSetsSantaMaria.textContent = setsSantaMaria
        } else if (inputs[i].classList.contains('resultado-santa-maria') && inputs[i].value == 2) {
            pontosSantaMaria += 2
            jogosSantaMaria += 1
            vitoriasSantaMaria += 1
            derrotasSantaMaria += 0
            setsSantaMaria += 2

            tdPontosSantaMaria.textContent = pontosSantaMaria
            tdJogosSantaMaria.textContent = jogosSantaMaria
            tdVitoriasSantaMaria.textContent = vitoriasSantaMaria
            tdDerrotasSantaMaria.textContent = derrotasSantaMaria
            tdSetsSantaMaria.textContent = setsSantaMaria
        } else if(inputs[i].classList.contains('resultado-santa-maria') && inputs[i].value == 1) {
            pontosSantaMaria += 1
            jogosSantaMaria += 1
            vitoriasSantaMaria += 0
            derrotasSantaMaria += 1
            setsSantaMaria += 1

            tdPontosSantaMaria.textContent = pontosSantaMaria
            tdJogosSantaMaria.textContent = jogosSantaMaria
            tdVitoriasSantaMaria.textContent = vitoriasSantaMaria
            tdDerrotasSantaMaria.textContent = derrotasSantaMaria
            tdSetsSantaMaria.textContent = setsSantaMaria
        } else if(inputs[i].classList.contains('resultado-santa-maria') && inputs[i].value == 0) {
            pontosSantaMaria += 0
            jogosSantaMaria += 1
            vitoriasSantaMaria += 0
            derrotasSantaMaria += 1
            setsSantaMaria += 0

            tdPontosSantaMaria.textContent = pontosSantaMaria
            tdJogosSantaMaria.textContent = jogosSantaMaria
            tdVitoriasSantaMaria.textContent = vitoriasSantaMaria
            tdDerrotasSantaMaria.textContent = derrotasSantaMaria
            tdSetsSantaMaria.textContent = setsSantaMaria
        }

        // Valores São Francisco
        if(inputs[i].classList.contains('resultado-sao-francisco') && inputs[i].value == 3) {
            pontosSaoFrancisco += 3
            jogosSaoFrancisco += 1
            vitoriasSaoFrancisco += 1
            derrotasSaoFrancisco += 0
            setsSaoFrancisco += 3

            tdPontosSaoFrancisco.textContent = pontosSaoFrancisco
            tdJogosSaoFrancisco.textContent = jogosSaoFrancisco
            tdVitoriasSaoFrancisco.textContent = vitoriasSaoFrancisco
            tdDerrotasSaoFrancisco.textContent = derrotasSaoFrancisco
            tdSetsSaoFrancisco.textContent = setsSaoFrancisco
        } else if (inputs[i].classList.contains('resultado-sao-francisco') && inputs[i].value == 2) {
            pontosSaoFrancisco += 2
            jogosSaoFrancisco += 1
            vitoriasSaoFrancisco += 1
            derrotasSaoFrancisco += 0
            setsSaoFrancisco += 2

            tdPontosSaoFrancisco.textContent = pontosSaoFrancisco
            tdJogosSaoFrancisco.textContent = jogosSaoFrancisco
            tdVitoriasSaoFrancisco.textContent = vitoriasSaoFrancisco
            tdDerrotasSaoFrancisco.textContent = derrotasSaoFrancisco
            tdSetsSaoFrancisco.textContent = setsSaoFrancisco
        } else if(inputs[i].classList.contains('resultado-sao-francisco') && inputs[i].value == 1) {
            pontosSaoFrancisco += 1
            jogosSaoFrancisco += 1
            vitoriasSaoFrancisco += 0
            derrotasSaoFrancisco += 1
            setsSaoFrancisco += 1

            tdPontosSaoFrancisco.textContent = pontosSaoFrancisco
            tdJogosSaoFrancisco.textContent = jogosSaoFrancisco
            tdVitoriasSaoFrancisco.textContent = vitoriasSaoFrancisco
            tdDerrotasSaoFrancisco.textContent = derrotasSaoFrancisco
            tdSetsSaoFrancisco.textContent = setsSaoFrancisco
        } else if(inputs[i].classList.contains('resultado-sao-francisco') && inputs[i].value == 0) {
            pontosSaoFrancisco += 0
            jogosSaoFrancisco += 1
            vitoriasSaoFrancisco += 0
            derrotasSaoFrancisco += 1
            setsSaoFrancisco += 0

            tdPontosSaoFrancisco.textContent = pontosSaoFrancisco
            tdJogosSaoFrancisco.textContent = jogosSaoFrancisco
            tdVitoriasSaoFrancisco.textContent = vitoriasSaoFrancisco
            tdDerrotasSaoFrancisco.textContent = derrotasSaoFrancisco
            tdSetsSaoFrancisco.textContent = setsSaoFrancisco
        }

        // Valores Vaporeon
        if(inputs[i].classList.contains('resultado-vaporeon') && inputs[i].value == 3) {
            pontosVaporeon += 3
            jogosVaporeon += 1
            vitoriasVaporeon += 1
            derrotasVaporeon += 0
            setsVaporeon+= 3

            tdPontosVaporeon.textContent = pontosVaporeon
            tdJogosVaporeon.textContent = jogosVaporeon
            tdVitoriasVaporeon.textContent = vitoriasVaporeon
            tdDerrotasVaporeon.textContent = derrotasVaporeon
            tdSetsVaporeon.textContent = setsVaporeon
        } else if (inputs[i].classList.contains('resultado-vaporeon') && inputs[i].value == 2) {
            pontosVaporeon += 2
            jogosVaporeon += 1
            vitoriasVaporeon += 1
            derrotasVaporeon += 0
            setsVaporeon+= 2

            tdPontosVaporeon.textContent = pontosVaporeon
            tdJogosVaporeon.textContent = jogosVaporeon
            tdVitoriasVaporeon.textContent = vitoriasVaporeon
            tdDerrotasVaporeon.textContent = derrotasVaporeon
            tdSetsVaporeon.textContent = setsVaporeon
        } else if(inputs[i].classList.contains('resultado-vaporeon') && inputs[i].value == 1) {
            pontosVaporeon += 1
            jogosVaporeon += 1
            vitoriasVaporeon += 0
            derrotasVaporeon += 1
            setsVaporeon+= 1

            tdPontosVaporeon.textContent = pontosVaporeon
            tdJogosVaporeon.textContent = jogosVaporeon
            tdVitoriasVaporeon.textContent = vitoriasVaporeon
            tdDerrotasVaporeon.textContent = derrotasVaporeon
            tdSetsVaporeon.textContent = setsVaporeon
        } else if(inputs[i].classList.contains('resultado-vaporeon') && inputs[i].value == 0) {
            pontosVaporeon += 0
            jogosVaporeon += 1
            vitoriasVaporeon += 0
            derrotasVaporeon += 1
            setsVaporeon+= 0

            tdPontosVaporeon.textContent = pontosVaporeon
            tdJogosVaporeon.textContent = jogosVaporeon
            tdVitoriasVaporeon.textContent = vitoriasVaporeon
            tdDerrotasVaporeon.textContent = derrotasVaporeon
            tdSetsVaporeon.textContent = setsVaporeon
        }
    }    

    // -------- Section tabela --------
        // Cria uma cópia da tabela original
        const tabelaOriginal = document.querySelector('table')
        const tabelaOrdenada = tabelaOriginal.cloneNode(true)
        tabelaOrdenada.classList.add('tabela-nova')

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
            // Possível solução para adicionar o confronto direto
        }

        // Ordena a tabela por vitórias, pontos e confronto direto
        valorComparar.sort(function(a, b) {
            if (a[3] < b[3]) {
                return 1;
            } else if (a[3] > b[3]) {
                return -1;
            } else if (a[1] < b[1]) {
                return 1;
            } else if (a[1] > b[1]) {
                return -1;
            } else if(a[6] > b[6]) {
                return 1;
            } else if(a[6] < b[6]) {
                return -1;
            } {
                return 0;
            } 
          });
          
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
    }

    // Esconde a tabela original e exibe a tabela ordenada
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

botaoDesempatar[0].addEventListener('click', () => {
    tdDesempatarCrias += 1;
    tdDesempatar[0].textContent = tdDesempatarCrias;

    // -------- Section tabela --------
    // Cria uma cópia da tabela original
    const tabelaOriginal = document.querySelector('table')
    const tabelaOrdenada = tabelaOriginal.cloneNode(true)
    tabelaOrdenada.classList.add('tabela-nova')

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
        // Possível solução para adicionar o confronto direto
    }

    // Ordena a tabela por vitórias, pontos e confronto direto
    valorComparar.sort(function(a, b) {
        if (a[3] < b[3]) {
            return 1;
        } else if (a[3] > b[3]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else if(a[6] < b[6]) {
            return 1;
        } else if(a[6] > b[6]) {
            return -1;
        } {
            return 0;
        } 
        });
          
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
    }

    // Esconde a tabela original e exibe a tabela ordenada
    tabelaOriginal.style.display = 'none'
    tabelaOrdenada.style.display = 'table'
    tabelaOriginal.parentNode.insertBefore
    (tabelaOrdenada, tabelaOriginal.nextSibling)

    alert('resultado atualizado!')

    console.log(valorComparar)
})

botaoDesempatar[1].addEventListener('click', () => {
    tdDesempatarMaracana += 1;
    tdDesempatar[1].textContent = tdDesempatarMaracana;

    // -------- Section tabela --------
    // Cria uma cópia da tabela original
    const tabelaOriginal = document.querySelector('table')
    const tabelaOrdenada = tabelaOriginal.cloneNode(true)
    tabelaOrdenada.classList.add('tabela-nova')

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
        // Possível solução para adicionar o confronto direto
    }

    // Ordena a tabela por vitórias, pontos e confronto direto
    valorComparar.sort(function(a, b) {
        if (a[3] < b[3]) {
            return 1;
        } else if (a[3] > b[3]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else if(a[6] < b[6]) {
            return 1;
        } else if(a[6] > b[6]) {
            return -1;
        } {
            return 0;
        } 
        });
          
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
    }

    // Esconde a tabela original e exibe a tabela ordenada
    tabelaOriginal.style.display = 'none'
    tabelaOrdenada.style.display = 'table'
    tabelaOriginal.parentNode.insertBefore
    (tabelaOrdenada, tabelaOriginal.nextSibling)

    alert('resultado atualizado!')

    console.log(valorComparar)
})

botaoDesempatar[2].addEventListener('click', () => {
    tdDesempatarOpen += 1;
    tdDesempatar[2].textContent = tdDesempatarOpen;

    // -------- Section tabela --------
    // Cria uma cópia da tabela original
    const tabelaOriginal = document.querySelector('table')
    const tabelaOrdenada = tabelaOriginal.cloneNode(true)
    tabelaOrdenada.classList.add('tabela-nova')

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
        // Possível solução para adicionar o confronto direto
    }

    // Ordena a tabela por vitórias, pontos e confronto direto
    valorComparar.sort(function(a, b) {
        if (a[3] < b[3]) {
            return 1;
        } else if (a[3] > b[3]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else if(a[6] < b[6]) {
            return 1;
        } else if(a[6] > b[6]) {
            return -1;
        } {
            return 0;
        } 
        });
          
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
    }

    // Esconde a tabela original e exibe a tabela ordenada
    tabelaOriginal.style.display = 'none'
    tabelaOrdenada.style.display = 'table'
    tabelaOriginal.parentNode.insertBefore
    (tabelaOrdenada, tabelaOriginal.nextSibling)

    alert('resultado atualizado!')

    console.log(valorComparar)
})

botaoDesempatar[3].addEventListener('click', () => {
    tdDesempatarSantaMaria += 1;
    tdDesempatar[3].textContent = tdDesempatarSantaMaria;

    // -------- Section tabela --------
    // Cria uma cópia da tabela original
    const tabelaOriginal = document.querySelector('table')
    const tabelaOrdenada = tabelaOriginal.cloneNode(true)
    tabelaOrdenada.classList.add('tabela-nova')

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
        // Possível solução para adicionar o confronto direto
    }

    // Ordena a tabela por vitórias, pontos e confronto direto
    valorComparar.sort(function(a, b) {
        if (a[3] < b[3]) {
            return 1;
        } else if (a[3] > b[3]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else if(a[6] < b[6]) {
            return 1;
        } else if(a[6] > b[6]) {
            return -1;
        } {
            return 0;
        } 
        });
          
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
    }

    // Esconde a tabela original e exibe a tabela ordenada
    tabelaOriginal.style.display = 'none'
    tabelaOrdenada.style.display = 'table'
    tabelaOriginal.parentNode.insertBefore
    (tabelaOrdenada, tabelaOriginal.nextSibling)

    alert('resultado atualizado!')

    console.log(valorComparar)
})

botaoDesempatar[4].addEventListener('click', () => {
    tdDesempatarSaoFrancisco += 1;
    tdDesempatar[4].textContent = tdDesempatarSaoFrancisco;

    // -------- Section tabela --------
    // Cria uma cópia da tabela original
    const tabelaOriginal = document.querySelector('table')
    const tabelaOrdenada = tabelaOriginal.cloneNode(true)
    tabelaOrdenada.classList.add('tabela-nova')

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
        // Possível solução para adicionar o confronto direto
    }

    // Ordena a tabela por vitórias, pontos e confronto direto
    valorComparar.sort(function(a, b) {
        if (a[3] < b[3]) {
            return 1;
        } else if (a[3] > b[3]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else if(a[6] < b[6]) {
            return 1;
        } else if(a[6] > b[6]) {
            return -1;
        } {
            return 0;
        } 
        });
          
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
    }

    // Esconde a tabela original e exibe a tabela ordenada
    tabelaOriginal.style.display = 'none'
    tabelaOrdenada.style.display = 'table'
    tabelaOriginal.parentNode.insertBefore
    (tabelaOrdenada, tabelaOriginal.nextSibling)

    alert('resultado atualizado!')

    console.log(valorComparar)
})

botaoDesempatar[5].addEventListener('click', () => {
    tdDesempatarVaporeon += 1;
    tdDesempatar[5].textContent = tdDesempatarVaporeon;

    // -------- Section tabela --------
    // Cria uma cópia da tabela original
    const tabelaOriginal = document.querySelector('table')
    const tabelaOrdenada = tabelaOriginal.cloneNode(true)
    tabelaOrdenada.classList.add('tabela-nova')

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
        // Possível solução para adicionar o confronto direto
    }

    // Ordena a tabela por vitórias, pontos e confronto direto
    valorComparar.sort(function(a, b) {
        if (a[3] < b[3]) {
            return 1;
        } else if (a[3] > b[3]) {
            return -1;
        } else if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else if(a[6] < b[6]) {
            return 1;
        } else if(a[6] > b[6]) {
            return -1;
        } {
            return 0;
        } 
        });
          
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
    }

    // Esconde a tabela original e exibe a tabela ordenada
    tabelaOriginal.style.display = 'none'
    tabelaOrdenada.style.display = 'table'
    tabelaOriginal.parentNode.insertBefore
    (tabelaOrdenada, tabelaOriginal.nextSibling)

    alert('resultado atualizado!')

    console.log(valorComparar)
})
















