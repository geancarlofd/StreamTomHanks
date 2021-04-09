<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script type="text/javascript" src="../js/cadastro.js"></script>

    <script type="text/javascript" src="../js/hash/jquery-3.3.1.js"></script><!--jQuery-->
    <script src='../js/hash/jquery.md5.js'></script><!--MD5-->
    
    <script type="text/javascript" src="../js/cadastro.js"></script>

    <link rel="stylesheet" href="../css/cadastro.css"><!--CSS cadastro-->
    
    <link rel="shortcut icon" href="../img/wilson.png">
    <title>Cadastro - StreamHanks</title>
</head>
<body>
    <!--Formulario de Cadastro-->
    <div class="formularioCadastro">
        <img class="wilsonBack" src="../img/wilson.png"><!--imagem Wilson-->
        <form id="formulario" class="formulario">
            <table class="tabelaFormulario" cellspacing="3px">
                <tr>
                    <td colspan="2" class="tituloCampo" id="lNomeCompleto">Nome Completo</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" class="inputFormulario" id="tNomeCompleto" name="nomeCompleto"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="tituloCampo" id="lDataDeNascimento">Data de Nascimento</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="date" class="inputFormulario" id="tDataDeNascimento" name="dataNascimento"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="tituloCampo" id="lEmail">E-mail</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="email" class="inputFormulario" id="tEmail" name="email"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="tituloCampo" id="lSenha">Senha</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="password" class="inputFormulario" id="tSenha"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="senhaCampo">Senha deve conter mais de 8 caracteres</td>
                </tr>
                <tr>
                    <td colspan="2" class="tituloCampo" id="lConfirmSenha">Confirmar Senha</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="password" class="inputFormulario" id="tConfirmSenha"/>
                    </td>
                </tr>
                <tr height="10px">
                    <td colspan="2">
                        <div class="erroAviso" id="erroAviso"></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="tituloCampo" id="lNomeCompletoCartao">Nome Completo (Impresso no Cartão)</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" class="inputFormulario" id="tNomeCompletoCartao" name="cartao_NomeCompleto"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="tituloCampo" id="lNumeroDoCartao">Número do Cartão</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" class="inputFormulario" id="tNumeroDoCartao" name="cartao_Numero"/></td>
                </tr>
                <tr>
                    <td class="tituloCampo" id="lValidadeDoCartao">Validade do Cartão</td>
                    <td class="tituloCampo" id="lCodigoDeSeguranca">Código de Segurança</td>
                </tr>
                <tr>
                    <td><input type="month" min="2021-01"   class="inputFormulario" id="tValidadeDoCartao" name="cartao_Validade"/></td>
                    <td><input type="text" placeholder="CVV"  maxlength="4" class="inputFormulario" id="tCodigoDeSeguranca" name="cartao_CodigoSeguranca"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="tituloCampo " id="lCpfCnpj">CPF/CNPJ</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" maxlength="14" class="inputFormulario" id="tCpfCnpj" name="cpf"/></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="hidden" id="senhaHash" name="senhaHash"/></td>
                </tr>
                <tr>
                    <td colspan="2"><button class="botaoForm" id="btnCadastrar">Cadastrar</button></td>
                </tr>
            </table>
        </form>
    </div>
    
</body>
</html>