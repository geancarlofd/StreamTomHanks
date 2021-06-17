<?php
    session_start();

    require "../config.php";

    $retorno["status"] = "n";
	$retorno["mensagem"] = "usuario não cadastrado.";
	$retorno["funcao"] = "login";
    $retorno["usuarioTipo"] = "normal";


    $login = $_POST["emailUsuario"];
    $senha = $_POST["senhaUsuario"];
    
    $result = mysqli_query($conexao, "SELECT * FROM usuario WHERE Email = '{$login}' AND Senha = '{$senha}' AND status = 1"); //resultado da query armazenando

    $row = mysqli_num_rows($result);//armazenando rows

    if($row >= 1){
        $registro = mysqli_fetch_assoc($result);

        $_SESSION['usuario'] = $registro["Email"];
        $_SESSION['id_usuario'] = $registro["id"];
        $_SESSION['nome_usuario'] = $registro["NomeCompleto"];
        $_SESSION["inicio"] = time();
        $_SESSION["tempolimite"] = 500;
        $_SESSION["usuarioTipo"] = $registro['tipo'];

        $_SESSION["id"] = session_id();

        if($registro['tipo'] == "admin"){
            $retorno["usuarioTipo"] = "admin";
        }

        $retorno["status"] = "s";
		$retorno["mensagem"] = "usuario cadastrado";
    }
    else{
        $_SESSION['nao_autenticado'] = true;
    }

        
    mysqli_close($conexao);

    echo json_encode($retorno);

?>