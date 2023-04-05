import constutor from "./spa/construtor.js";
import verificaItemAtivo from "./spa/trocaItem.js";

const formulario = document.querySelector(".principal__formulario");
const botaoVoltar = document.querySelector("[data-botao='voltar']");

formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    verificaItemAtivo(evento, botaoVoltar);
    constutor();

    const conteudoSecao = document.querySelectorAll("[data-secao]");

    conteudoSecao.forEach(secao => {
        secao.addEventListener("click", evento => {
            if(evento.target.parentNode.dataset.secao === "secao") {
                evento.target.parentNode.classList.toggle("conteudo__secao--ativo");
            }else if(evento.target.parentNode.dataset.form === "formulario") {
                evento.target.classList.toggle("conteudo__secao--ativo");
            }
        });
    });
});

botaoVoltar.addEventListener("click", evento => {
    verificaItemAtivo(evento, botaoVoltar);
    constutor();
});
