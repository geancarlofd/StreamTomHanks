var globalErrorCampo = false;

window.onload = function () {
    document.getElementById("tNomeCompleto").focus();

    document.getElementById("btnCadastrar").onclick = function () {

        globalErrorCampo = false;

        verificador("tNomeCompleto", "lNomeCompleto");
        verificador("tDataDeNascimento", "lDataDeNascimento");
        verificador("tEmail","lEmail");
        verificador("tSenha","lSenha");
        verificador("tConfirmSenha","lConfirmSenha");
        verificador("tNomeCompletoCartao","lNomeCompletoCartao");
        verificador("tNumeroDoCartao", "lNumeroDoCartao");
        verificador("tValidadeDoCartao", "lValidadeDoCartao");
        verificador("tCodigoDeSeguranca","lCodigoDeSeguranca");
        verificador("tCpfCnpj","lCpfCnpj");

        senhasConfirm();

        if (globalErrorCampo == false) {
            hashSenha(senha);
            limparCampos();
            alert('Formulario enviado com sucesso');

            document.getElementById("tNomeCompleto").focus();
        }
    }
}


function verificador(idCampo, idTexto) {
    var valor = document.getElementById(idCampo).value;
    var elementoIpt = document.getElementById(idCampo);
    var elementoTxt = document.getElementById(idTexto);

    if(valor == ""){
        
        elementoIpt.classList.remove("inputFormulario");
        elementoIpt.classList.add("inputFormularioErro");

        elementoTxt.classList.remove("tituloCampo");
        elementoTxt.classList.add("tituloCampoErro");

        globalErrorCampo = true;
    }
    else{
        elementoIpt.classList.remove("inputFormularioErro");
        elementoIpt.classList.add("inputFormulario");

        elementoTxt.classList.remove("tituloCampoErro");
        elementoTxt.classList.add("tituloCampo");
    }
}

function senhasConfirm() {
    var senha = document.getElementById("tSenha").value;
    var confirmarSenha = document.getElementById("tConfirmSenha").value;

    if (senha == confirmarSenha){

        document.getElementById("erroAviso").innerHTML = " ";

        document.getElementById("tSenha").classList.remove("inputFormularioErro");
        document.getElementById("tSenha").classList.add("inputFormulario");
        document.getElementById("lSenha").classList.remove("tituloCampoErro");
        document.getElementById("lSenha").classList.add("tituloCampo");

        document.getElementById("tConfirmSenha").classList.remove("inputFormularioErro");
        document.getElementById("tConfirmSenha").classList.add("inputFormulario");
        document.getElementById("lConfirmSenha").classList.remove("tituloCampoErro");
        document.getElementById("lConfirmSenha").classList.add("tituloCampo");

    }
    else{
        document.getElementById("erroAviso").innerHTML = "Senhas não compatíveis";

        document.getElementById("tSenha").classList.remove("inputFormulario");
        document.getElementById("tSenha").classList.add("inputFormularioErro");
        document.getElementById("lSenha").classList.remove("tituloCampo");
        document.getElementById("lSenha").classList.add("tituloCampoErro");

        document.getElementById("tConfirmSenha").classList.remove("inputFormulario");
        document.getElementById("tConfirmSenha").classList.add("inputFormularioErro");
        document.getElementById("lConfirmSenha").classList.remove("tituloCampo");
        document.getElementById("lConfirmSenha").classList.add("tituloCampoErro");

        globalErrorCampo = true;
    }

}

function hashSenha(senha){
    
    var senha_hash_md5 = $.MD5(senha);

    var myBitArray = sjcl.hash.sha256.hash(senha);
    var senha_hash_sha256 = sjcl.codec.hex.fromBits(myBitArray);


    alert(senha_hash_md5);
    alert(senha_hash_sha256);
}

function limparCampos() {

    document.getElementById("tNomeCompleto").value = '';
    document.getElementById("tDataDeNascimento").value = '';
    document.getElementById("tEmail").value = '';
    document.getElementById("tSenha").value = '';
    document.getElementById("tConfirmSenha").value = '';
    document.getElementById("tNomeCompletoCartao").value = '';
    document.getElementById("tNumeroDoCartao").value = '';
    document.getElementById("tValidadeDoCartao").value = '';
    document.getElementById("tCodigoDeSeguranca").value = '';
    document.getElementById("tCpfCnpj").value = '';
}