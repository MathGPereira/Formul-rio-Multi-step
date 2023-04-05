import constutor from "./spa/construtor.js";
import verificaItemAtivo from "./spa/trocaItem.js";

const formulario = document.querySelector(".principal__formulario");
const botaoVoltar = document.querySelector("[data-botao='voltar']");

formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    verificaItemAtivo(evento, botaoVoltar);
    constutor();
});

botaoVoltar.addEventListener("click", evento => {
    verificaItemAtivo(evento, botaoVoltar);
    constutor();
});
