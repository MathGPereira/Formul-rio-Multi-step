import constutor from "./spa/construtor.js";

const botoes = document.querySelectorAll("[data-botao]");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        constutor();
    });
});