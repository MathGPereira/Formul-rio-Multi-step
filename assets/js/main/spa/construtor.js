export default function constutor() {
    const formularioAtivo = document.querySelector(".lista-multipagina__item--ativo").innerHTML;
    const conteudoPrincipal = document.querySelector(".principal");
    const formulario = constroiFormulario(formularioAtivo);

    conteudoPrincipal.innerHTML = formulario;
}

function constroiFormulario(formularioAtivo) {
    if(formularioAtivo === "2") {
        const formulario = `
                <form action="#" method="POST" autocomplete="on" id="formulario" class="principal__formulario">
                <fieldset class="formulario__conteudo">
                    <legend class="conteudo__titulo">Selecione o seu plano</legend>
                    <P class="conteudo__descricao">
                        Você tem a opção de cobrança mensal ou anual.
                    </P>
                    <section class="conteudo__secao conteudo__secao--ativo">
                        <div class="secao__icone icone__videogame"></div>
                        <label for="videogame" class="conteudo__rotulo">Videogame</label>
                        <input type="radio" id="videogame" name="jogos" class="secao__input">
                        <p class="secao__descricao">
                            R$<span class="descricao__preco">9</span>/
                            <span class="descricao__tempo">mês</span>
                        </p>
                    </section>
                    <section class="conteudo__secao">
                        <div class="secao__icone icone__avancado"></div>
                        <label for="avancado" class="conteudo__rotulo">Avançado</label>
                        <input type="radio" id="avancado" name="jogos" class="secao__input">
                        <p class="secao__descricao">
                            R$<span class="descricao__preco">12</span>/
                            <span class="descricao__tempo">mês</span>
                        </p>
                    </section>
                    <section class="conteudo__secao">
                        <div class="secao__icone icone__pro"></div>
                        <label for="pro" class="conteudo__rotulo">Pro</label>
                        <input type="radio" id="pro" name="jogos" class="secao__input">
                        <p class="secao__descricao">
                            R$<span class="descricao__preco">15</span>/
                            <span class="descricao__tempo">mês</span>
                        </p>
                    </section>
                    <div class="conteudo__tipo-tempo">
                        <label for="tipo-tempo" class="conteudo__rotulo rotulo-mes">Mensalmente</label>
                        <div class="tipo-tempo__toggle">
                            <input type="checkbox" id="tipo-tempo" class="trocar trocar--sombra">
                            <label for="tipo-tempo" class="tipo-tempo__label"></label>
                        </div>
                        <label for="tipo-tempo" class="conteudo__rotulo rotulo-ano">Anualmente</label>
                    </div>
                </fieldset>
            </form>
        `;
        
        return formulario;
    }
}