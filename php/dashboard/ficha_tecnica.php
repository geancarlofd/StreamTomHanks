<?php 
    require '../config.php';

    $id_filme = $_POST["id_filme"];

    $retorno["status"] = "n";
	$retorno["funcao"] = "conteudo_ficha_tecnica";

    $indice = "";
    $f = "f";
    $num = 0;

    $result = mysqli_query($conexao, "SELECT * FROM filmes WHERE id_filmes = '{$id_filme}'");

    $row = mysqli_num_rows($result);

    if($row >= 1){
        $retorno["status"] = "s";

        $registro = mysqli_fetch_assoc($result);

        $indice = $i.$num;

        $retorno[$indice]["sinopse"] = $registro["sinopse"];
        $retorno[$indice]["duracao"] = $registro["duracao"];
        $retorno[$indice]["diretor"] = $registro["diretor"];
        $retorno[$indice]["producao"] = $registro["producao"];
        $retorno[$indice]["roteiro"] = $registro["roteiro"];
        $retorno[$indice]["edicao"] = $registro["edicao"];
        $retorno[$indice]["distribuicao"] = $registro["distribuicao"];
        $retorno[$indice]["trailer"] = $registro["trailer"];


        $num++;
    }

    mysqli_close($conexao);

    echo json_encode($retorno);
?>