
window.onload = function(){
    fLocalComunicaServidor("sessao/valida_sessao");
    chamadaClick();
}

function chamadaClick(){
    document.getElementById("bPerfil").onclick = function(){
        window.location.href="../myAccount/";
    }
    document.getElementById("bPlanos").onclick = function () {
        window.location.href = "planos/";
    }
    document.getElementById("bSobrePlataforma").onclick = function () {
        window.location.href = "sobrePlataforma/";
    }
    document.getElementById("bSair").onclick = function () {
        fLocalComunicaServidor("login/logout");
    }

    document.getElementById("bAlterarPagamento").onclick = function () {
        window.location.href = "alterarPagamento/";
    }

    document.getElementById("pTitulo").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/dashboard/"
    }
    document.getElementById("iconHeader").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/myAccount/"
    }
    document.getElementById("pMinhaLista").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/minha_lista/";
        return false;
    }
}



function fLocalComunicaServidor(arquivo) {

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../../php/"+arquivo+".php",
        success: function (retorno) {

            if(retorno.funcao == "logout") {
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