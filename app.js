let listaDeNumerosorteados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


 function verificarChute(){
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número Secreto! com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
    }   limpaCampo()
    
 }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite);
    let quantidadeDeElementosNaLista = listaDeNumerosorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosorteados = [];
    }
    if(listaDeNumerosorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosorteados.push(numeroEscolhido);
        console.log(listaDeNumerosorteados);
        return numeroEscolhido;
    }
}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

