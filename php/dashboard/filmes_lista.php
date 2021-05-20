<?php
    session_start();

    require '../config.php';

    $retorno["status"] = "s";
	$retorno["funcao"] = "minha_lista";
    

    $id_usuario = $_SESSION['id_usuario'];

    $num = 0;

    $resultMLista = mysqli_query($conexao, "SELECT * FROM minha_lista WHERE id_usuario = $id_usuario");

    while($registro = mysqli_fetch_assoc($resultMLista)){


        $retorno[$num]["id"] = $registro["id_filmes"];

        $num++;
    }

    $retorno["tamanho"] = $num;

    mysqli_close($conexao);

    echo json_encode($retorno);
?>