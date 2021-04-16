var globalErrorCampo = false;

window.onload = function () {
    document.getElementById("tNomeCompleto").focus();

    document.getElementById("btnCadastrar").onclick = function () {

        globalErrorCampo = false;

        campos();

        senhasConfirm();/*Chamada da function que valida as senhas*/

        if (globalErrorCampo == false) {/*Caso todos os campos forem validos*/

            hashSenha(document.getElementById("tSenha").value);/*Hash da senha*/
            fLocalComunicaServidor("form-cadastrar","cadastro_usuario");
        }
        return false;
    }
}

function campos(){
    /*Verifica campos vazios*/
    verificador("tNomeCompleto", "lNomeCompleto");
    verificador("tDataDeNascimento", "lDataDeNascimento");
    verificador("tEmail", "lEmail");
    verificador("tSenha", "lSenha");
    verificador("tConfirmSenha", "lConfirmSenha");
    verificador("tNomeCompletoCartao", "lNomeCompletoCartao");
    verificador("tNumeroDoCartao", "lNumeroDoCartao");
    verificador("tValidadeDoCartao", "lValidadeDoCartao");
    verificador("tCodigoDeSeguranca", "lCodigoDeSeguranca");
    verificador("tCpfCnpj", "lCpfCnpj");
}

function verificador(idCampo, idTexto) { /*Funcao que verifica se os campos estao vazios*/
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

        elementoTxt.classList.remove("tituloCampoErro");
        elementoTxt.classList.add("tituloCampo");
    }
}

function senhasConfirm() { /*Funcao que verifica se as senhas sao validas*/
    var senha = document.getElementById("tSenha").value;
    var confirmarSenha = document.getElementById("tConfirmSenha").value;

    if (senha == confirmarSenha && senha.length >= 8){

        document.getElementById("erroAviso").innerHTML = " ";

        document.getElementById("tSenha").classList.remove("inputFormularioErro");
        document.getElementById("tSenha").classList.add("inputFormulario");
        document.getElementById("lSenha").classList.remove("tituloCampoErro");
        document.getElementById("lSenha").classList.add("tituloCampo");

        document.getElementById("tConfirmSenha").classList.remove("inputFormularioErro");
        document.getElementById("tConfirmSenha").classList.add("inputFormulario");
        document.getElementById("lConfirmSenha").classList.remove("tituloCampoErro");
        document.getElementById("lConfirmSenha").classList.add("tituloCampo");

    }
    else{
        document.getElementById("erroAviso").innerHTML = "Senhas não compatíveis";

        document.getElementById("tSenha").classList.remove("inputFormulario");
        document.getElementById("tSenha").classList.add("inputFormularioErro");
        document.getElementById("lSenha").classList.remove("tituloCampo");
        document.getElementById("lSenha").classList.add("tituloCampoErro");

        document.getElementById("tConfirmSenha").classList.remove("inputFormulario");
        document.getElementById("tConfirmSenha").classList.add("inputFormularioErro");
        document.getElementById("lConfirmSenha").classList.remove("tituloCampo");
        document.getElementById("lConfirmSenha").classList.add("tituloCampoErro");

        globalErrorCampo = true;
    }

}

function limparCampos() {/*Funcao que limpa os campos/inputs*/
    document.getElementById("tNomeCompleto").value = '';
    document.getElementById("tDataDeNascimento").value = '';
    document.getElementById("tEmail").value = '';
    document.getElementById("tSenha").value = '';
    document.getElementById("tConfirmSenha").value = '';
    document.getElementById("tNomeCompletoCartao").value = '';
    document.getElementById("tNumeroDoCartao").value = '';
    document.getElementById("tValidadeDoCartao").value = '';
    document.getElementById("tCodigoDeSeguranca").value = '';
    document.getElementById("tCpfCnpj").value = '';
}

function hashSenha(senha) { /*Funcao Hash*/
    var senha_hash_md5 = $.MD5(senha);

    document.getElementById("senhaHash").value = senha_hash_md5;/*Enviando para o input invisivel*/
}

function fLocalComunicaServidor(formulario, arquivo) {

    var dados = $("#" + formulario).serialize();

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/cadastro/" + arquivo + ".php",
        data: dados,
        success: function (retorno) {

            if (retorno.funcao == "cadastro") {
                if (retorno.status == "s") {
                    fLocalComunicaServidor("form-cadastrar", "envio_email");
                    window.location.href = "../../index.html";
                }
                else {
                    alert(retorno.mensagem);
                    limparCampos();
                    campos();
                }
            }
        }

    });

}