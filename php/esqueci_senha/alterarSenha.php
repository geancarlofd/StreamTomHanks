 <?php 
    require "../config.php";

    if(isset($_POST['insert'])){
        $chave = $_GET['chave'];
        $senha = $_POST['Senha'];
        $senhaConfirmar = $_POST['SenhaConfirmar'];
        $tamanhoSenha = strlen($senha);

        if($senha == $senhaConfirmar){
            if($tamanhoSenha >= 8){
                $novaSenha_hash = md5($senha);
                mysqli_query($conexao, "UPDATE usuario SET Senha = '$novaSenha_hash' WHERE chave = '$chave'");
                echo ("<script>alert('Senha alterada com sucesso.');</script>");
                mudarPagina();
            }else{
                echo ("<script>alert('Sua senha precisa ter pelo menos 8 caracteres');</script>");
            }
        }else{
            echo ("<script>alert('Senhas diferentes.');</script>");
        }
    }

    function mudarPagina(){
        header('Location: /StreamTomhanks/StreamTomHanks/');
    }

 ?>
 <html>
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../../css/confirmacaoEmail.css">

    <link rel="shortcut icon" href="../../img/wilson.png">
    <title>Alterar Senha - StreamHanks</title>

 </head>
 <body>
     <div class="dConfirmacao">
        <img class="wilsonBack" src="../../img/wilson.png"><!--imagem Wilson-->
        <form method="POST">
            <table class="tableConfirmacao">
                <tr>
                    <td colspan="2" class="tituloCampo">Nova Senha</td>
                </tr>
                <tr>
                    <td><input type="password" name="Senha" placeholder="Nova Senha" class="iptSenha"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="tituloCampo">Confirmar Nova Senha</td>
                </tr>
                <tr>
                    <td><input type="password" name="SenhaConfirmar" placeholder="Nova Senha" class="iptSenha"/></td>
                </tr>    
                <tr>
                    <td><button class="btnEntrar" name="insert">Entrar</button></td>
                </tr>         
            </table>
        </form>
     </div>

 </body>
 </html>
