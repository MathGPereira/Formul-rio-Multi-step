export default function verificaItemAtivo(evento, botao) {
    const listaItens = document.querySelectorAll(".lista-multipagina__item");
    
    for(let j = 0; j <= listaItens.length; j++){
        const classesDoItem = listaItens[j].classList;

        for(let i = 0; i <= classesDoItem.length; i++) {
            if(classesDoItem[i] === "lista-multipagina__item--ativo") {
                trocaItemAtivo(listaItens[j], botao, evento);
                return;
            }
        }
    }
}

function trocaItemAtivo(itemAtivo, botao, evento) {
    if(validaBotaoApertado(evento)) {
        proximoItemAtivo = itemAtivo.parentNode.nextSibling.nextSibling.querySelector(".lista-multipagina__item");
    }else {
        proximoItemAtivo = itemAtivo.parentNode.previousSibling.previousSibling.querySelector(".lista-multipagina__item");
    }

    try {
        if(proximoItemAtivo !== null) {
            proximoItemAtivo.classList.add("lista-multipagina__item--ativo");
            itemAtivo.classList.remove("lista-multipagina__item--ativo");
            modificaEstadoBotaoVoltar(proximoItemAtivo, botao);
        }else {
            throw new Error("Erro");
        }
    } catch(erro) {
        return erro;
    }
}

function modificaEstadoBotaoVoltar(item, botao) {
    if(Number(item.innerHTML) > 1) {
        botao.classList.remove("inativo");
    }else {
        botao.classList.add("inativo");
    }
}

function validaBotaoApertado(evento) {
    return Array.from(evento.target.classList).includes("principal__formulario");
}

let proximoItemAtivo;