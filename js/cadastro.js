var globalErrorCampo = false;

window.onload = function () {
    document.getElementById("tNomeCompleto").focus();

    document.getElementById("btnCadastrar").onclick = function () {

        verificador("tNomeCompleto", "lNomeCompleto");
        verificador("tDataDeNascimento", "lDataDeNascimento");
        verificador("tEmail","lEmail");
        verificador("tSenha","lSenha");
        verificador("tConfirmSenha","lConfirmSenha");
        verificador("tNomeCompletoCartao","lNomeCompletoCartao");
        verificador("tNumeroDoCartao", "lNumeroDoCartao");
        verificador("tValidadeDoCartao", "lValidadeDoCartao");
        verificador("tCodigoDeSeguranca","lCodigoDeSeguranca");
        verificador("tCpfCnpj","lCpfCnpj")
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
    }
    else{
        elementoIpt.classList.remove("inputFormularioErro");
        elementoIpt.classList.add("inputFormulario");

        elementoIpt.classList.remove('tituloCampoErro');
        elementoIpt.classList.add('tituloCampo');
    }
}

function senhasConfirm() {

}

function limparCampos() {
    
}