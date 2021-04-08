<?php
session_start();

include('conexao.php');

if (empty($_POST['inputEmail']) || empty($_POST['inputSenha'])) {

  header('Location: ../pages/login.html');
  exit();
}

$email = mysqli_real_escape_string($conexao, $_POST['inputEmail']);
$senha = mysqli_real_escape_string($conexao, $_POST['inputSenha']);

$query = "SELECT * FROM usuario WHERE Email = '{$email}' AND Senha = '{$senha}'";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);


if($row == 1){
  $_SESSION['inputEmail'] = $email;
  header('Location: ../pages/painel.php')
  exit();
}else{
  header('Location: ../pages/login.html');
  exit();
}

?>




