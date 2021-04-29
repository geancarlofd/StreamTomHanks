window.onload = function(){
    fLocalComunicaServer();
    document.getElementById("pTitulo").onclick = function(){
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/dashboard/"
    }
    document.getElementById("iconHeader").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/myAccount/"
    }
}

function fLocalComunicaServer() {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/sessao/valida_sessao.php",
        success: function (retorno) {

            if (retorno.funcao == "valida-sessao") {
                if (retorno.status == "n") {
                    window.location.href = "/StreamTomHanks/StreamTomHanks/pages/login/";
                }
            }
        }

    });
}