import constutor from "./spa/construtor.js";
import verificaItemAtivo from "./spa/trocaItem.js";

const botoes = document.querySelectorAll("[data-botao]");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        verificaItemAtivo();
        //constutor();
    });
});
