

var bdUser = window.localStorage;

window.onload = function() {

    document.getElementById("inputEmail").focus();

    document.getElementById('btnLogin').onclick = function (){

        verificarUsuario();
        limparErro();
        fLocalComunicaServidor("senhalogin");
    }
};

function verificarUsuario() {
    var user = document.getElementById('inputEmail').value;
    var senha = document.getElementById('inputSenha').value;

    var dados = bdUser.getItem("dados");

    if(dados != null) {
        for (var i = 0; i < dados.length; i++) {
            if (user == dados[i][0] || user == dados[i][2]) {
                if (senha == dados[i][3])
                    window.location.href = "../pages/login.html";
                else {
                    erro();
                }
            }
            else {
                erro();
            }
        }
    }
    else {
        erro();
    }

}

function hashSenha(senha) { 
    var senha_hash_md5 = $.MD5(senha);

   return(senha_hash_md5);
}

function limparInput(){
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputSenha").value = "";    
}

function erro(){
    var element = document.getElementById("trErro");
    element.classList.add("tr-erro");
    element.innerHTML = "<td>Usuário ou Senha incorretos</td>";
    limparInput();
}
    
function limparErro(){
    var element = document.getElementById("trErro");
    element.classList.remove("tr-erro");
    element.value = "";
}

function fLocalComunicaServidor(senhalogin){ 

    var valores = $("#formularioLogin").serialize();
    console.log(valores);
    $.ajax({
        type:"POST",
        data: window.location.href,
        dataType: "json",
        data: valores,
        url: "../php/"+ senhalogin + ".php",
        success:function(retorno){}
    });
}