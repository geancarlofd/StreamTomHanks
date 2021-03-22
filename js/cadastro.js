var globalErrorCampo = false;

window.onload = function () {
    document.getElementById("tNomeCompleto").focus();

    document.getElementById("btnCadastrar").onclick = function () {

        globalErrorCampo = false;

        verificador("tNomeCompleto", "lNomeCompleto");
        verificador("tDataDeNascimento", "lDataDeNascimento");
        verificador("tEmail","lEmail");
        verificador("tSenha","lSenha");
        verificador("tConfirmSenha","lConfirmSenha");
        verificador("tNomeCompletoCartao","lNomeCompletoCartao");
        verificador("tNumeroDoCartao", "lNumeroDoCartao");
        verificador("tValidadeDoCartao", "lValidadeDoCartao");
        verificador("tCodigoDeSeguranca","lCodigoDeSeguranca");
        verificador("tCpfCnpj","lCpfCnpj");

        senhasConfirm();

        if (globalErrorCampo == false) {
            limparCampos();
            alert('Formulario enviado com sucesso');

            document.getElementById("tNomeCompleto").focus();
        }
    }
}


function verificador(idCampo, idTexto) {
    var valor = document.getElementById(idCampo).value;
    var elementoIpt = document.getElementById(idCampo);
    var elementoTxt = document.getElementById(idTexto);

    if(valor == ""){
        
        elementoIpt.classList.remove("inputFormulario");
        elementoIpt.classList.add("inputFormularioErro");

        elementoTxt.classList.remove("tituloCampo");
        elementoTxt.classList.add("tituloCampoErro");

        globalErrorCampo = true;
    }
    else{
        elementoIpt.classList.remove("inputFormularioErro");
        elementoIpt.classList.add("inputFormulario");

        elementoIpt.classList.remove("tituloCampoErro");
        elementoIpt.classList.add("tituloCampo");
    }
}

function senhasConfirm() {
    var senha = document.getElementById("tSenha").value;
    var confirmarSenha = document.getElementsByName("tConfirmSenha").valeu;

    if (senha == confirmarSenha){
        document.getElementById("erroAviso").innerText("");

        document.getElementById("tSenha").classList.remove("inputFormularioErro");
        document.getElementById("tSenha").classList.add("inputFormulario");

        document.getElementById("tConfirmSenha").classList.remove("inputFormularioErro");
        document.getElementById("tConfirmSenha").classList.add("inputFormulario");
    }
    else{
        document.getElementById("erroAviso").innerText("Senhas não compatíveis");

        document.getElementById("tSenha").classList.remove("inputFormulario");
        document.getElementById("tSenha").classList.add("inputFormularioErro");

        document.getElementById("tConfirmSenha").classList.remove("inputFormulario");
        document.getElementById("tConfirmSenha").classList.add("inputFormularioErro");

        globalErrorCampo = true;
    }

}

function limparCampos() {
    
}