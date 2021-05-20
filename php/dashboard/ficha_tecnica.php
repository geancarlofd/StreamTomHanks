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

        $resultFicha = mysqli_query($conexao, "SELECT * FROM ficha_tecnica WHERE id_filmes = $id_filme");

        $registro = mysqli_fetch_assoc($result);
        $registroFicha = mysqli_fetch_assoc($resultFicha);

        $retorno["filme"]["titulo"] = utf8_encode($registro["titulo"]);
        $retorno["filme"]["ano"] = utf8_encode($registro["ano"]);
        $retorno["filme"]["genero"] = utf8_encode($registro["genero"]);
        $retorno["filme"]["sinopse"] = utf8_encode($registroFicha["sinopse"]);
        $retorno["filme"]["duracao"] = utf8_encode($registroFicha["duracao"]);
        $retorno["filme"]["diretor"] = utf8_encode($registroFicha["diretor"]);
        $retorno["filme"]["producao"] = utf8_encode($registroFicha["producao"]);
        $retorno["filme"]["roteiro"] = utf8_encode($registroFicha["roteiro"]);
        $retorno["filme"]["edicao"] = utf8_encode($registroFicha["edicao"]);
        $retorno["filme"]["distribuicao"] = utf8_encode($registroFicha["distribuicao"]);
        $retorno["filme"]["trailer"] = utf8_encode($registroFicha["trailer"]);

    }

    mysqli_close($conexao);

    echo json_encode($retorno);
?>