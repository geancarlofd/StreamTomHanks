
window.onload = function (){
    fLocalComunicaServidor("login_verifica");
}

function fLocalComunicaServidor(arquivo) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/login/" + arquivo + ".php",
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