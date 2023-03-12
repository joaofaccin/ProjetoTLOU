/* Mostrar fundo Correspondente ao clicar */
const botoesCarrossel = document.querySelectorAll('.botao');
const listImg = document.querySelectorAll('.imagem');

/* Identicar o click do botão */
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        /* Desmarcar botao selecionado */
        DesabilitaBotao();
        EscodeImgAtiva();
              
        /*Selecionar botao */ 
        MostraBotaoCarrossel(botao);

        /* seleciona a img  */
        MostraImgSelecionada(indice);
        
    })
})

function MostraImgSelecionada(indice) {
    listImg[indice].classList.add('ativa');
}

function MostraBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function EscodeImgAtiva() {
    const imgSelect = document.querySelector('.ativa');
    imgSelect.classList.remove('ativa');
}

function DesabilitaBotao() {
    const btoSelect = document.querySelector('.selecionado');
    btoSelect.classList.remove('selecionado');
}

