var globalErrorCampo = false;

window.onload = function (){
    chamadaClick();
}

function chamadaClick() {
    document.getElementById("bPerfil").onclick = function () {
        window.location.href = "../";
        return false;
    }
    document.getElementById("bSair").onclick = function () {
        logout("login/logout");
        return false;
    }

    document.getElementById("bAlterarPagamento").onclick = function () {
        window.location.href = "alterarPagamento/";
    }

    document.getElementById("bAlterarPagamento").onclick = function () {
        globalErrorCampo == false;

        campos();
        console.log(globalErrorCampo);
        if (globalErrorCampo == false) {
            fLocalComunicaServidor('formPagamento', 'alterarPagamento');
        }

        return false;
    }
}

function campos() {
    /*Verifica campos vazios*/
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

    if (valor == "") {

        elementoIpt.classList.remove("inputFormulario");
        elementoIpt.classList.add("inputFormularioErro");

        elementoTxt.classList.remove("tituloCampo");
        elementoTxt.classList.add("tituloCampoErro");

        globalErrorCampo = true;
    }
    else {
        elementoIpt.classList.remove("inputFormularioErro");
        elementoIpt.classList.add("inputFormulario");

        elementoTxt.classList.remove("tituloCampoErro");
        elementoTxt.classList.add("tituloCampo");
    }
}

function limparCampos() {/*Funcao que limpa os campos/inputs*/
    document.getElementById("tNomeCompletoCartao").value = '';
    document.getElementById("tNumeroDoCartao").value = '';
    document.getElementById("tValidadeDoCartao").value = '';
    document.getElementById("tCodigoDeSeguranca").value = '';
    document.getElementById("tCpfCnpj").value = '';
}

function fLocalComunicaServidor(formulario, arquivo) {

    var dados = $("#" + formulario).serialize();

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/StreamTomHanks/StreamTomHanks/php/myAccount/" + arquivo + ".php",
        data: dados,

        success: function (retorno) {

            if (retorno.funcao == "alterarPagamento") {
                if (retorno.status == "s") {
                    limparCampos();
                    alert(retorno.mensagem);
                    window.location.href = "../";
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

function logout(arquivo) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../../php/" + arquivo + ".php",
        success: function (retorno) {

            if (retorno.funcao == "logout") {
                if (retorno.status == "s") {
                    window.location.href = "/StreamTomHanks/StreamTomHanks/";
                }
            }
            else if (retorno.funcao == "valida-sessao") {
                if (retorno.status == "n") {
                    window.location.href = "/StreamTomHanks/StreamTomHanks/pages/login/";
                }
            }
        }

    });

}