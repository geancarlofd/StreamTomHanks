 <?php 
    require "../config.php";

    $chave = $_GET['chave'];

    mysqli_query($conexao, "UPDATE usuario SET status = '1' WHERE chave = '$chave'");

 ?>
 <html>
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../../css/confirmacaoEmail.css">

    <link rel="shortcut icon" href="../../img/wilson.png">
    <title>Confirmação de E-mail - StreamHanks</title>

 </head>
 <body>
     <div class="dConfirmacao">
        <img class="wilsonBack" src="../../img/wilson.png"><!--imagem Wilson-->
        <table class="tableConfirmacao">
            <tr>
                <td><h1 class="tConfirmacao">Cadastro Completo</h1></td>
            </tr>
            <tr>
                <td><h2 class="tConfirmacao">Bem-vindo ao StreamHanks, o serviço de streaming do Tom Hanks.</h2></h1></td>
            </tr>     
            <tr>
                <td><a href="../../pages/login/"><button class="btnEntrar">Entrar</button></a></td>
            </tr>         
        </table>
     </div>

 </body>
 </html>