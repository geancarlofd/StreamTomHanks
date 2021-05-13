<?php 
    require '../config.php';

    $retorno["status"] = "s";
	$retorno["funcao"] = "conteudo";

    $num = 0;

    $result = mysqli_query($conexao, "SELECT id FROM filmes ORDER BY id ASC");

    while($registro = mysqli_fetch_assoc($result)){
        
        $retorno[$num]["id"] = $registro["id"];
        /*$retorno[$num]["titulo"] = $registro["titulo"];
        $retorno[$num]["ano"] = $registro["ano"];
        $retorno[$num]["genero"] = $registro["genero"];*/

        $num++;
    }

    mysqli_close($conexao);

    echo json_encode($retorno);
?>