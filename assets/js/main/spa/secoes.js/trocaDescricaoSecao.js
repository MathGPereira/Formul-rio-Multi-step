export default function trocaPrecoTempo(evento) {
    let ajuste = 0;
    const dataTempoSecoes = document.querySelectorAll("[data-tempo-secao]");
    const dataPrecoSecoes = document.querySelectorAll("[data-preco]");
    
    if(evento.target.dataset.tempo === "ano") {
        dataTempoSecoes.forEach(dataTempoSecao => {dataTempoSecao.innerHTML = "ano";});
        dataPrecoSecoes.forEach(dataPrecoSecao => {
            dataPrecoSecao.innerHTML = 90 + ajuste;
            ajuste += 30;
        });
    }else {
        dataTempoSecoes.forEach(dataTempoSecao => {dataTempoSecao.innerHTML = "mês";});
        dataPrecoSecoes.forEach(dataPrecoSecao => {
            dataPrecoSecao.innerHTML = 9 + ajuste;
            ajuste += 3;
        });
    }
}
