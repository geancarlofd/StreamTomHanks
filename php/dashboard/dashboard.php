<?php 
    require '../config.php';

    $result = mysqli_query($conexao, "SELECT * FROM filmes");

    $registro = mysqli_fetch_assoc($result);

    $titulo = $registro["titulo"];

    $trailer = $registro["trailer"];

    $retorno["funcao"] = "card";
    $retorno["status"] = "s";

    $retorno['titulo'] = $titulo;

    $retorno['trailer'] = $trailer;


    echo json_encode($retorno);
?>