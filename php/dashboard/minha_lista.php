<?php
    session_start();

    require '../config.php';

	$retorno["funcao"] = "minha_lista";

    $id_filme = $_POST["id"];

    $id_usuario = $_SESSION['id_usuario'];

    $resultConfere = mysqli_query($conexao, "SELECT * FROM minha_lista WHERE id_filmes = $id_filme AND id_usuario = $id_usuario");

    $row = mysqli_num_rows($resultConfere);

    if($row == 0){
        $retorno["simbolo"] = "x";
	    $retorno["mensagem"] = "Filme adicionado";

        $result = mysqli_query($conexao, "INSERT INTO minha_lista (id_usuario,id_filmes) VALUES('$id_usuario', '$id_filme')");
          
    }else{
        $retorno["simbolo"] = "+";
        $retorno["mensagem"] = "Filme removido da lista";

        $result = mysqli_query($conexao, "DELETE FROM minha_lista WHERE id_filmes = $id_filme AND id_usuario = $id_usuario");
    }

    echo json_encode($retorno);

    mysqli_close($conexao);