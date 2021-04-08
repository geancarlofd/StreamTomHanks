
window.onload = function(){

    document.getElementById("bEntrar").onclick = function(){
        fLocalComunicaServidor();
    }

}

function hashSenha(senha) { 
    var senha_hash_md5 = $.MD5(senha);

    alert(senha_hash_md5);
    return senha_hash_md5;
}

function fLocalComunicaServidor(){

    var senhaHash = hashSenha(document.getElementById("tSenha").value);

    alert("Conectando PHP");
    
    $.ajax({
        type: "POST",
        data: {
            email: $("#tEmail").val(),
            senha: senhaHash.toString(),
        },
        dataType: "json",
        url: "../php/login.php",
        success: function (retorno) { 
            if (retorno == "valido"){
                alert("Usuario Logado");
                window.location.href = "../index.html";
            }
            else{
                alert("Usuario Invalido");
            }
        }
    });
}
