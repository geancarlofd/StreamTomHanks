<?php 
    /*Inserindo dados na tabela usuario (a partir do cadastro - novo usuario)*/

    /*Dados dos Campos de Cadastro*/
    $nomeCompleto = $_POST["nomeCompleto"];
    $dataNascimento = $_POST["dataNascimento"];
    $email = $_POST["email"];
    $senhaHash = $_POST["senhaHash"];
    $cartao_NomeCompleto = $_POST["cartao_NomeCompleto"];
    $cartao_Numero = $_POST["cartao_Numero"];
    $cartao_Validade = $_POST["cartao_Validade"];
    $cartao_CodigoSeguranca = $_POST["cartao_CodigoSeguranca"];
    $cpf = $_POST["cpf"];

    $con = mysqli_connect("localhost:3306", "root", "", "streamhanks");/*Conectando com o banco*/

    /*Executando a query para o banco*/
    /*Sera a insercao de dados na tabela*/
    mysqli_query($con, "INSERT INTO usuario (NomeCompleto, DataNascimento, Email, Senha, Cartao_NomeCompleto, Cartao_Numero, Cartao_Validade, Cartao_CodigoSeguranca, Cpf)
                    VALUES('$nomeCompleto','$dataNascimento','$email','$senhaHash','$cartao_NomeCompleto','$cartao_Numero','$cartao_Validade','$cartao_CodigoSeguranca','$cpf')");

?>