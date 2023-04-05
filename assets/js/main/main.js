import validaBotaoApertado from "./spa/secoes.js/ativaBotaoSecao.js";
import trocaPrecoTempo from "./spa/secoes.js/trocaDescricaoSecao.js";
import verificaItemAtivo from "./spa/trocaItem.js";
import construtor from "./spa/construtor.js";


const formulario = document.querySelector(".principal__formulario");
const botaoVoltar = document.querySelector("[data-botao='voltar']");
formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    verificaItemAtivo(evento, botaoVoltar);
    construtor();

    let conteudoSecao = document.querySelectorAll("[data-secao]");
    let rotulosDeTempo = document.querySelectorAll("[data-tempo]");

    conteudoSecao.forEach(secao => {
        secao.addEventListener("click", evento => {
            validaBotaoApertado(evento);
        });
    });

    rotulosDeTempo.forEach(rotuloDeTempo => {
        rotuloDeTempo.addEventListener("click", evento => {
            rotulosDeTempo.forEach(rotulo => {
                trocaPrecoTempo(evento);
                rotulo.classList.toggle("conteudo__rotulo--inativo");
            });
        });
    });
});    

botaoVoltar.addEventListener("click", evento => {
    verificaItemAtivo(evento, botaoVoltar);
    construtor();
});
