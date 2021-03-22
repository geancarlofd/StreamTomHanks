
var bdUser = window.localStorage;

window.onload = function() {

    document.getElementById("inputUser").focus();

    document.getElementById('btnLogin').onclick = function (){
        limparErro();
        verificarUsuario();
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

}

function limparInput(){
    document.getElementById("inputUser").value = "";
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
