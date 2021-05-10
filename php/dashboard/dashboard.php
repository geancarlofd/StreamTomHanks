<?php 
    require '../config.php';

    $retorno["status"] = "s";
	$retorno["funcao"] = "conteudo";

    $indice = "";
    $i = "i";
    $num = 0;

    $result = mysqli_query($conexao, "SELECT * FROM filmes ORDER BY id ASC");

    while($registro = mysqli_fetch_assoc($result)){
        $indice = $i.$num;
        
        $retorno[$indice]["id"] = $registro["id"];
        $retorno[$indice]["titulo"] = $registro["titulo"];
        $retorno[$indice]["ano"] = $registro["ano"];
        $retorno[$indice]["genero"] = $registro["genero"];

        $retorno["tamanho"] = $num;

        $num++;
    }

    mysqli_close($conexao);

    echo json_encode($retorno);
?>