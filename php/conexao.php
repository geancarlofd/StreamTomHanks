<?php

define('HOST', 'localhost: 3308');
define('USUARIO', 'root');
define('SENHA', 'root');
define('DB', 'streamhanks');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die('Não foi possível conectar');

?>