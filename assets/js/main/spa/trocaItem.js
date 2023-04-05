export default function verificaItemAtivo() {
    const listaItens = document.querySelectorAll(".lista-multipagina__item");
    
    for(let j = 0; j <= listaItens.length; j++){
        const classesDoItem = listaItens[j].classList;

        for(let i = 0; i <= classesDoItem.length; i++) {
            if(classesDoItem[i] === "lista-multipagina__item--ativo") {
                trocaItemAtivo(listaItens[j]);
                return;
            }
        }
    }
}

function trocaItemAtivo(itemAtivo) {
    const proximoItemAtivo = itemAtivo.nextSibling.nextSibling;

    proximoItemAtivo.classList.add("lista-multipagina__item--ativo");
    itemAtivo.classList.remove("lista-multipagina__item--ativo");
}

