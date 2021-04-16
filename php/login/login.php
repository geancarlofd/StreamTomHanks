<?php
    session_start();
    require "../config.php";

    $retorno["status"] = "n";
	$retorno["mensagem"] = "usuario não cadastrado.";
	$retorno["funcao"] = "login";


    $login = $_POST["emailUsuario"];
    $senha = $_POST["senhaUsuario"];
    
    $result = mysqli_query($conexao, "SELECT * FROM usuario WHERE Email = '{$login}' AND Senha = '{$senha}' AND status = 1"); //resultado da query armazenando

    $row = mysqli_num_rows($result);//armazenando rows

    if($row >= 1){
        $_SESSION['usuario'] = $login;

        $retorno["status"] = "s";
		$retorno["mensagem"] = "usuario cadastrado";
    }
    else{
        $_SESSION['nao_autenticado'] = true;
    }
        
    mysqli_close($conexao);

    echo json_encode($retorno);

?>