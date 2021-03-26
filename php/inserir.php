<?php 

    $nomeCompleto = $_POST["nomeCompleto"];
    $dataNascimento = $_POST["dataNascimento"];
    $email = $_POST["email"];
    $senhaHash = $_POST["senhaHash"];
    $cartao_NomeCompleto = $_POST["cartao_NomeCompleto"];
    $cartao_Numero = $_POST["cartao_Numero"];
    $cartao_Validade = $_POST["cartao_Validade"];
    $cartao_CodigoSeguranca = $_POST["cartao_CodigoSeguranca"];
    $cpf = $_POST["cpf"];

    $con = mysqli_connect("localhost:3306", "root", "", "streamhanks");

    mysqli_query($con, "INSERT INTO usuario (NomeCompleto, DataNascimento, Email, Senha, Cartao_NomeCompleto, Cartao_Numero, Cartao_Validade, Cartao_CodigoSeguranca, Cpf)
                    VALUES('$nomeCompleto','$dataNascimento','$email','$senhaHash','$cartao_NomeCompleto','$cartao_Numero','$cartao_Validade','$cartao_CodigoSeguranca','$cpf')");

?>