<?php
	/*INSERINDO DADOS NA TABELA USUARIO (a partir do cadastro - novo usuario)*/

    require "../config.php";

    $retorno["status"] = "n";
	$retorno["mensagem"] = "Email já cadastrado.";
	$retorno["funcao"] = "cadastro";

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

	$chave = md5($nomeCompleto.$dataNascimento.$email);//Chave para a confirmacao do email

	$resultEmail = mysqli_query($conexao, "SELECT * FROM usuario WHERE Email = '{$email}' AND status = 1");

	$row = mysqli_num_rows($resultEmail);

	if($row == 0){
        $retorno["status"] = "s";
		$retorno["mensagem"] = "Usuario cadastrado";

		/*Executando a query para o banco*/
    	/*Sera a insercao de dados na tabela*/
    	mysqli_query($conexao, "INSERT INTO usuario (NomeCompleto, DataNascimento, Email, Senha, Cartao_NomeCompleto, Cartao_Numero, Cartao_Validade, Cartao_CodigoSeguranca, Cpf, chave)
                    VALUES('$nomeCompleto','$dataNascimento','$email','$senhaHash','$cartao_NomeCompleto','$cartao_Numero','$cartao_Validade','$cartao_CodigoSeguranca','$cpf','$chave')");

		mysqli_close($conexao);
	}

    echo json_encode($retorno);
		

?>