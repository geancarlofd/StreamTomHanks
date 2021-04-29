
window.onload = function(){
    chamadaClick();
}

function chamadaClick(){
    document.getElementById("btnesqueciSenha").onclick = function(){
        fLocalComunicaServidor("formEsqueciSenha", "esqueciSenha");
    }
}

function fLocalComunicaServidor(formulario, arquivo) {

    var dados = $("#" + formulario).serialize();

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/esqueci_senha/" + arquivo + ".php",
        data: dados,
        success: function (retorno) {

            if (retorno.funcao == "esqueci-senha") {
                if (retorno.status == "s") {
                    alert("deuuuu" + retorno.chave);
                }
                else {
                    alert("n deu ;-;"+retorno.chave);
                }
            }
        }

    });

}