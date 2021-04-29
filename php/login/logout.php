<?php
    session_start();

    $retorno["funcao"] = "logout";
    $retorno["status"] = "s";

    unset($_SESSION["usuario"]);
	unset($_SESSION['id_usuario']);
	unset($_SESSION['nome_usuario']);
	unset($_SESSION["inicio"]);
    unset($_SESSION["tempolimite"]);
    unset($_SESSION["id"]);

	session_destroy();

    echo json_encode($retorno);
   
?>