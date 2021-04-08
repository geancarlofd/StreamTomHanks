

window.onload = function() {

    document.getElementById("inputEmail").focus();

    document.getElementById('btnLogin').onclick = function (){
        fLocalComunicaServidor();
    }
};

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

function hashSenha(senha) {
    var senha_hash_md5 = $.MD5(senha);

    return senha_hash_md5;
}

function fLocalComunicaServidor() {

    var senhaHash = hashSenha(document.getElementById("inputSenha").value);

    $.ajax({
        type: "POST",
        data: {
            usuario: $("#inputEmail").val(),
            usuarioSenha: senhaHash.toString(),
        },
        dataType: "json",
        url: "../php/login.php",
        success: function (retorno) {
            if (retorno == "valido") {
                limparErro();
                window.location.href = "../pages/telaInicial.php";
            }
            else {
                erro();
                document.getElementById("inputEmail").focus();
            }
        }
    });
}
