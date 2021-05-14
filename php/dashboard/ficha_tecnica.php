<?php 
    require '../config.php';

    $id_filme = $_POST["id"];

    $retorno["status"] = "n";
	$retorno["funcao"] = "conteudo_ficha_tecnica";
    $retorno["mensagem"] = "Nao foi encontrado nenhum filme.";

    $result = mysqli_query($conexao, "SELECT * FROM filmes WHERE id = $id_filme");

    $row = mysqli_num_rows($result);


    if($row >= 1){
        $retorno["status"] = "s";
        $retorno["mensagem"] = "Foi encontrado pelo menos um filme.";

        $registro = mysqli_fetch_assoc($result);

        $retorno["filme"]["titulo"] = utf8_encode($registro["titulo"]);
        $retorno["filme"]["ano"] = utf8_encode($registro["ano"]);
        $retorno["filme"]["genero"] = utf8_encode($registro["genero"]);
        /*$retorno["filme"]["sinopse"] = $registro["sinopse"];
        $retorno["filme"]["duracao"] = $registro["duracao"];
        $retorno["filme"]["diretor"] = $registro["diretor"];
        $retorno["filme"]["producao"] = $registro["producao"];
        $retorno["filme"]["roteiro"] = $registro["roteiro"];
        $retorno["filme"]["edicao"] = $registro["edicao"];
        $retorno["filme"]["distribuicao"] = $registro["distribuicao"];
        $retorno["filme"]["trailer"] = $registro["trailer"];*/

    }

    mysqli_close($conexao);

    echo json_encode($retorno);
?>