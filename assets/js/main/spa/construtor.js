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
                    <legend class="conteudo__titulo">Informações pessoais</legend>
                    <P class="conteudo__descricao">
                        Por favor, forneça seu nome, endereço de e-mail e número de telefone.
                    </P>
                    <label for="nome" class="conteudo__rotulo">Name</label>
                    <input type="text" name="nome" id="nome" class="conteudo__entrada" required placeholder="e.x.: Pedro Marins" maxlength="30" minlength="7">
                    <label for="email" class="conteudo__rotulo">Endereço de E-mail</label>
                    <input type="email" name="email" id="email" class="conteudo__entrada" required placeholder="e.x.: email@dominio.com" pattern="">
                    <label for="numero" class="conteudo__rotulo">Número de Telefone</label>
                    <input type="text" name="numero" id="numero" class="conteudo__entrada" maxlength="15" minlength="11" required placeholder="e.x.: (xxx)xxxxx-xxxx" pattern="">
                </fieldset>
            </form>
        `;
        
        return formulario;
    }
}