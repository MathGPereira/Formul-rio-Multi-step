import validaBotaoApertado from "./spa/ativaBotaoSecao.js";
import verificaItemAtivo from "./spa/trocaItem.js";
import constutor from "./spa/construtor.js";


let conteudoSecao;
const formulario = document.querySelector(".principal__formulario");
const botaoVoltar = document.querySelector("[data-botao='voltar']");

formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    verificaItemAtivo(evento, botaoVoltar);
    constutor();

    conteudoSecao = document.querySelectorAll("[data-secao]");

    conteudoSecao.forEach(secao => {
        secao.addEventListener("click", evento => {
            validaBotaoApertado(evento);
        });
    });
});

botaoVoltar.addEventListener("click", evento => {
    verificaItemAtivo(evento, botaoVoltar);
    constutor();
});
