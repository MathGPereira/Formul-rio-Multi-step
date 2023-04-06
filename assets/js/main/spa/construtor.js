export default function construtor() {
    const formularioAtivo = document.querySelector(".lista-multipagina__item--ativo").innerHTML;
    const conteudoPrincipal = document.querySelector(".principal__formulario");
    const formularioConstruido = constroiFormulario(formularioAtivo);

    conteudoPrincipal.innerHTML = formularioConstruido;
}

function constroiFormulario(formularioAtivo) {
    if(formularioAtivo === "1") {
        formulario = `
            <fieldset class="formulario__conteudo">
                <legend class="conteudo__titulo">Informações pessoais</legend>
                <p class="conteudo__descricao">
                    Por favor, forneça seu nome, endereço de e-mail e número de telefone.
                </p>
                <label for="nome" class="conteudo__rotulo">Name</label>
                <input type="text" name="nome" id="nome" class="conteudo__entrada" required placeholder="e.x.: Pedro Marins" maxlength="30" minlength="7">
                <label for="email" class="conteudo__rotulo">Endereço de E-mail</label>
                <input type="email" name="email" id="email" class="conteudo__entrada" required placeholder="e.x.: email@dominio.com" pattern="[a-z0-9!#$%&*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?">
                <label for="numero" class="conteudo__rotulo">Número de Telefone</label>
                <input type="text" name="numero" id="numero" class="conteudo__entrada" maxlength="15" minlength="15" required placeholder="e.x.: (xxx)xxxxx-xxxx" pattern="\(\d{3}\)\d{5}-\d{4}">
            </fieldset>
        `;
    }else if(formularioAtivo === "2") {
        formulario = `
            <fieldset class="formulario__conteudo" data-form='formulario'>
                <legend class="conteudo__titulo">Selecione o seu plano</legend>
                <p class="conteudo__descricao">
                    Você tem a opção de cobrança mensal ou anual.
                </p>
                <section class="conteudo__secao" data-secao='secao'>
                    <div class="secao__icone icone__videogame"></div>
                    <label for="videogame" class="conteudo__rotulo">Videogame</label>
                    <p class="secao__descricao">
                        R$<span class="descricao__preco" data-preco='videogame'>9</span>/
                        <span class="descricao__tempo" data-tempo-secao>mês</span>
                    </p>
                </section>
                <section class="conteudo__secao" data-secao='secao'>
                    <div class="secao__icone icone__avancado"></div>
                    <label for="avancado" class="conteudo__rotulo">Avançado</label>
                    <p class="secao__descricao">
                        R$<span class="descricao__preco" data-preco='avancado'>12</span>/
                        <span class="descricao__tempo" data-tempo-secao>mês</span>
                    </p>
                </section>
                <section class="conteudo__secao" data-secao='secao'>
                    <div class="secao__icone icone__pro"></div>
                    <label for="pro" class="conteudo__rotulo">Pro</label>
                    <p class="secao__descricao">
                        R$<span class="descricao__preco" data-preco='pro'>15</span>/
                        <span class="descricao__tempo" data-tempo-secao>mês</span>
                    </p>
                </section>
                <div class="conteudo__tipo-tempo">
                    <label for="tipo-tempo" class="conteudo__rotulo rotulo-mes" data-tempo='mes'>Mensalmente</label>
                    <div class="tipo-tempo__toggle" inert>
                        <input type="checkbox" id="tipo-tempo" class="trocar trocar--sombra">
                        <label for="tipo-tempo" class="tipo-tempo__label"></label>
                    </div>
                    <label for="tipo-tempo" class="conteudo__rotulo rotulo-ano conteudo__rotulo--inativo" data-tempo='ano'>Anualmente</label>
                </div>
            </fieldset>
        `;
    }else if(formularioAtivo === "3") {
        formulario = `
            <fieldset class="formulario__conteudo" data-form='formulario'>
                <legend class="conteudo__titulo">Escolha os complementos</legend>
                <p class="conteudo__descricao">
                    Complementos ajudam a melhorar sua experiência de jogo
                </p>
                <section class="conteudo__secao form-tres" data-secao='secao'>
                    <input type="checkbox" id="servico__online" class="secao__checkbox absoluto">
                    <label for="servico__online" class="secao__checkbox checkbox-personalizado" name='servico-online'>
                        <div class="check"></div>
                    </label>
                    <label for="servico__online" class="conteudo__rotulo">Serviços online</label>
                    <p class="secao__descricao">Acesso a jogos multiplayers</p>
                    <p class="secao__preco-tempo">
                        +R$<span class="descricao__preco" data-preco='videogame'>1</span>/
                        <span class="descricao__tempo" data-tempo-secao>mês</span>
                    </p>
                </section>
                <section class="conteudo__secao form-tres" data-secao='secao'>
                    <input type="checkbox" id="armazenamento" class="secao__checkbox absoluto" name='armazenamento'>
                    <label for="armazenamento" class="secao__checkbox checkbox-personalizado">
                        <div class="check"></div>
                    </label>
                    <label for="armazenamento" class="conteudo__rotulo">Maior armazenamento</label>
                    <p class="secao__descricao">1TB extra de armazenamento em núvem</p>
                    <p class="secao__preco-tempo">
                        +R$<span class="descricao__preco" data-preco='videogame'>2</span>/
                        <span class="descricao__tempo" data-tempo-secao>mês</span>
                    </p>
                </section>
                <section class="conteudo__secao form-tres" data-secao='secao'>
                    <input type="checkbox" id="perfil" class="secao__checkbox absoluto" name='perfil-customizado'>
                    <label for="perfil" class="secao__checkbox checkbox-personalizado">
                        <div class="check"></div>
                    </label>
                    <label for="perfil" class="conteudo__rotulo">Perfil customizável</label>
                    <p class="secao__descricao">Customizar temas do seu perfil</p>
                    <p class="secao__preco-tempo">
                        +R$<span class="descricao__preco" data-preco='videogame'>2</span>/
                        <span class="descricao__tempo" data-tempo-secao>mês</span>
                    </p>
                </section>
            </fieldset>
        `;
    }else {
        formulario = ``;
    }

    return formulario;
}

let formulario;
