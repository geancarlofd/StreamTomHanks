

window.onload = function() {

    document.getElementById("inputEmail").focus();

    document.getElementById('btnLogin').onclick = function (){

        hashSenha(document.getElementById("inputSenha").value);/*Hash da senha*/

        fLocalComunicaServidor("form-login","login");
        return false;
    }

    document.getElementById('lEsqueciSenha').onclick = function (){
        window.location.href = "../../pages/esqueci_senha/";
    }
}

function limparCampos(){
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputSenha").value = "";    
}

function erro(){
    document.getElementById("erroAviso").innerHTML = "Usuário ou Senha incorretos";
}

function hashSenha(senha) { /*Funcao Hash*/
    var senha_hash_md5 = $.MD5(senha);

    document.getElementById("inputSenha_hash").value = senha_hash_md5;/*Enviando para o input invisivel*/
}

function fLocalComunicaServidor(formulario, arquivo) {

    var dados = $("#" + formulario).serialize();

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/login/" + arquivo + ".php",
        data: dados,
        success: function (retorno) {

            if (retorno.funcao == "login") {
                if (retorno.status == "s") {
                    window.location.href = "../dashboard/";
                }
                else {
                    erro();
                }
            }
        }

    });

}
