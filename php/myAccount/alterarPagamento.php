<?php 
    require "../config.php";

    $retorno["status"] = "n";
	$retorno["mensagem"] = "Nao foi possível alterar os dados";
	$retorno["funcao"] = "alterarPagamento";

    $cartao_NomeCompleto = $_POST["cartao_NomeCompleto"];
    $cartao_Numero = $_POST["cartao_Numero"];
    $cartao_Validade = $_POST["cartao_Validade"];
    $cartao_CodigoSeguranca = $_POST["cartao_CodigoSeguranca"];
    $cpf = $_POST["cpf"];

    $result = mysqli_query($conexao, "UPDATE usuario SET Cartao_NomeCompleto = '$cartao_NomeCompleto',
                            Cartao_Numero = '$cartao_Numero', Cartao_Validade = '$cartao_Validade',
                            Cartao_CodigoSeguranca = '$cartao_CodigoSeguranca', Cpf = '$cpf' WHERE id = 25");

    if($result == true){
        $retorno["status"] = "s";
		$retorno["mensagem"] = "Dados Alterados";
    }
	mysqli_close($conexao);

    echo json_encode($retorno);
?>