
window.onload = function(){
    fLocalComunicaServidor("sessao/valida_sessao");
    chamadaClick();
}

function chamadaClick(){
    document.getElementById("bPerfil").onclick = function(){
        window.location.href="../myAccount/";
        return false;
    }
    document.getElementById("bSair").onclick = function () {
        fLocalComunicaServidor("login/logout");
        return false;
    }

    document.getElementById("bAlterarPagamento").onclick = function () {
        window.location.href = "alterarPagamento/";
        return false;
    }

    document.getElementById("pTitulo").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/dashboard/"
        return false;
    }
    document.getElementById("iconHeader").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/myAccount/"
        return false;
    }
    document.getElementById("pMinhaLista").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/minha_lista/";
        return false;
    }
    document.getElementById("pFilmes").onclick = function () {
        window.location.href = "/StreamTomHanks/StreamTomHanks/pages/filmes/";
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