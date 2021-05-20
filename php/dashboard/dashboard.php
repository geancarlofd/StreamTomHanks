<?php
    session_start();

    require '../config.php';

    $retorno["status"] = "s";
	$retorno["funcao"] = "conteudo";
    $retorno["minha_lista"] = "n";
    

    $id_usuario = $_SESSION['id_usuario'];

    $num = 0;

    $result = mysqli_query($conexao, "SELECT id FROM filmes ORDER BY id ASC");

    while($registro = mysqli_fetch_assoc($result)){

        $id_filmes = $registro["id"];

        $retorno[$num]["id"] = $id_filmes;

        $resultMLista = mysqli_query($conexao, "SELECT * FROM minha_lista WHERE id_filmes = $id_filmes AND id_usuario = $id_usuario");
        $row = mysqli_num_rows($resultMLista);

        if($row == 0){
            $retorno[$num]["simbolo"] = "+";
        }else{
            $retorno[$num]["simbolo"] = "x";
            $retorno["minha_lista"] = "s";
        }

        $num++;
    }

    $retorno["tamanho"] = $num;

    mysqli_close($conexao);

    echo json_encode($retorno);
?>