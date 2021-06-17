<?php
    session_start();

    require '../config.php';

    $retorno["status"] = "s";
	$retorno["funcao"] = "filmesAdmin";
    

    $num = 0;

    $result = mysqli_query($conexao, "SELECT id FROM filmes ORDER BY id ASC");

    while($registro = mysqli_fetch_assoc($result)){

        $id_filmes = $registro["id"];

        $retorno[$num]["id"] = $id_filmes;

        $num++;
    }

    $retorno["tamanho"] = $num;

    mysqli_close($conexao);

    echo json_encode($retorno);
?>