
window.onload = function(){
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
        fLocalComunicaServidor();
    }

    document.getElementById("bAlterarPagamento").onclick = function () {
        window.location.href = "alterarPagamento/";
    }
}

function fLocalComunicaServidor() {
    console.log("sair")
}