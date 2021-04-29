
window.onload = function (){
    fLocalComunicaServer();
}

function fLocalComunicaServer(){

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/sessao/valida_sessao.php",
        success: function (retorno) {

            if (retorno.funcao == "valida-sessao") {
                if (retorno.status == "s") {
                    window.location.href = "/StreamTomHanks/StreamTomHanks/pages/dashboard/";
                }
            }
        }

    });
}
