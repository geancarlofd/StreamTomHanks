
var bdUser = window.localStorage;

window.onload = function() {

    document.getElementById("inputUser").focus();

    function divFunction(){
        document.getElementById('btnLogin').limparErro();
        document.getElementById('btnLogin').verificarUsuario();
    }
};

function verificarUsuario() {
    var user = document.getElementById('inputUser').value;
    var senha = document.getElementById('inputSenha').value;

    var dados = bdUser.getItem("dados");

    if(dados != null) {
        for (var i = 0; i < dados.length; i++) {
            if (user == dados[i][0] || user == dados[i][2]) {
                if (senha == dados[i][3])
                    window.location.href = "../index.html";
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
    console.log();
}

function limparInput(){
    document.getElementById("inputUser").innerHTML = " ";
    document.getElementById("inputSenha").innerHTML = " ";    
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
    element.innerHTML = " ";
}
