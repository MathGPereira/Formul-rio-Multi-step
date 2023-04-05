export default function validaBotaoApertado(evento) {
    if(evento.target.parentNode.dataset.secao === "secao") {
        evento.target.parentNode.classList.toggle("conteudo__secao--ativo");
    }else if(evento.target.parentNode.dataset.form === "formulario") {
        evento.target.classList.toggle("conteudo__secao--ativo");
    }
}