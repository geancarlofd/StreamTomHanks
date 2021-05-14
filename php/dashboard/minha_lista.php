<?php
    session_start();

    require '../config.php';

    $retorno["status"] = "n";
	$retorno["mensagem"] = "Filme ja esta na lista";
	$retorno["funcao"] = "minha_lista";

    $id_filme = $_POST["id"];
    $id_usuario = $_SESSION['id_usuario'];

    $resultConfere = mysqli_query($conexao, "SELECT * FROM minha_lista WHERE id_filmes = '{$id_filme}'");

    $row = mysqli_num_rows($resultConfere);

    if($row == 0){
        $retorno["status"] = "s";
	    $retorno["mensagem"] = "Filme adicionado";

        $result = mysqli_query($conexao, "INSERT INTO minha_lista (id_usuario,id_filmes) VALUES('$id_usuario', '$id_filme')");
        
        
    }

    echo json_encode($retorno);

    mysqli_close($conexao);