import validaBotaoApertado from "./spa/secoes.js/ativaBotaoSecao.js";
import trocaPrecoTempo from "./spa/secoes.js/trocaDescricaoSecao.js";
import verificaItemAtivo from "./spa/trocaItem.js";
import construtor from "./spa/construtor.js";

function ativaRotuloDeTempo(rotulosDeTempo) {
    rotulosDeTempo.forEach(rotuloDeTempo => {
        rotuloDeTempo.addEventListener("click", evento => {
            rotulosDeTempo.forEach(rotulo => {
                trocaPrecoTempo(evento);
                rotulo.classList.toggle("conteudo__rotulo--inativo");
            });
        });
    });
}

let rotulosDeTempo;
const formulario = document.querySelector(".principal__formulario");
const botaoVoltar = document.querySelector("[data-botao='voltar']");

formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    verificaItemAtivo(evento, botaoVoltar);
    construtor();

    let conteudoSecao = document.querySelectorAll("[data-secao]");
    rotulosDeTempo = document.querySelectorAll("[data-tempo]");

    conteudoSecao.forEach(secao => {
        secao.addEventListener("click", evento => {
            validaBotaoApertado(evento);
        });
    });

    ativaRotuloDeTempo(rotulosDeTempo);
});    

botaoVoltar.addEventListener("click", evento => {
    verificaItemAtivo(evento, botaoVoltar);
    construtor();

    rotulosDeTempo = document.querySelectorAll("[data-tempo]");

    ativaRotuloDeTempo(rotulosDeTempo);
});
