<?php
    require "../config.php";

    $retorno["status"] = "s";
	$retorno["funcao"] = "addFilme";

    //Filme
    $titulo = utf8_encode($_POST["titulo"]);
    $ano = $_POST["ano"];
    $genero = utf8_encode($_POST["genero"]);
    $referencia = utf8_encode($_POST["referencia"]);
    
    //ficha tecnica
    $sinopse = utf8_encode($_POST["sinopse"]);
    $duracao = $_POST["duracao"];
    $diretor = utf8_encode($_POST["diretor"]);
    $producao = utf8_encode($_POST["producao"]);
    $roteiro = utf8_encode($_POST["roteiro"]);
    $edicao = utf8_encode($_POST["edicao"]);
    $distribuicao = utf8_encode($_POST["distribuicao"]);
    $trailer = $_POST["trailer"];


    mysqli_query($conexao, "INSERT INTO filmes (titulo, ano, genero, referencia) VALUES('$titulo','$ano','$genero','$referencia')");

    $result = mysqli_query($conexao, "SELECT id FROM filmes WHERE titulo ="+$titulo);

    while($registro = mysqli_fetch_assoc($result)){

        $id_filmes = $registro["id"];

        $retorno["id_filmes"] = $id_filmes;

    }

    mysqli_query($conexao, "INSERT INTO ficha_tecnica (id_filmes, sinopse, duracao, diretor, producao, roteiro, edicao, distribuicao, trailer) 
        VALUES('$sinopse','$duracao','$diretor','$producao','$roteiro','$edicao','$distribuicao','$trailer')");

	mysqli_close($conexao);
	

    echo json_encode($retorno);
?>