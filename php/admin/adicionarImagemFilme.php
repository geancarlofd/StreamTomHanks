<?php
	require "../config.php";
	
	$result = mysqli_query($conexao, "SELECT MAX(id) FROM filmes");

    $registro = mysqli_fetch_assoc($result);

    $id_filmes = $registro["id"];

	echo $id_filmes;
	/*
	$arquivo_nome = $_FILES["file"]["name"];

	$arquivo = explode('.', $arquivo_nome);
	$arquivo_ext = strtolower(end($arquivo));


	if($arquivo_ext == "jpg"){

		$imagem_temp = imagecreatefromjpeg($_FILES["file"]["tmp_name"]);

		imagejpeg($imagem_temp, "/StreamTomHanks/StreamTomHanks/img/posters/pic.jpg");

	}
*/
	mysqli_close($conexao);
?>
