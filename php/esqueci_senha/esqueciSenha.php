<?php 
//ENVIO DE EMAIL

    $emailUsuario = $_POST["email"];

	date_default_timezone_set('Etc/UTC');
	require '../PHPMailer/PHPMailerAutoload.php';
    require "../config.php";
		
    $resultEmail = mysqli_query($conexao, "SELECT * FROM usuario WHERE Email = '{$emailUsuario}'");

	$row = mysqli_num_rows($resultEmail);

	if($row != null ){

        $registro = mysqli_fetch_assoc($resultEmail);

        $link ="http://localhost/StreamTomHanks/StreamTomHanks/php/esqueci_senha/alterarSenha.php?chave=".$registro["chave"];

		$tituloEmail = "Alterar Senha";//Assunto/Titulo email

		//Corpo da mensagem que sera enviada para o usuario
		$message = 'Olá,'.$registro["NomeCompleto"].'
                    <br><br><a href="'.$link.'">Acesse esse link para alterar sua senha.</a>
                    <br><br>Atenciosamente,
                    <br><br>Equipe StreamHanks';

		$mail= new PHPMailer;
		$mail->IsSMTP(); 
		$mail->CharSet = 'UTF-8';   
		$mail->SMTPDebug = 2;      // 0 = nao mostra o debug, 2 = mostra o debug
		$mail->SMTPAuth = true;     
		$mail->SMTPSecure = 'ssl';  
		$mail->Host = 'smtp.gmail.com'; 
		$mail->Port = 465; 
		$mail->Username = 'streamhanks'; //user email do sistema
		$mail->Password = '1234wilson';
		$mail->SetFrom('streamhanks@gmail.com', 'Stream Hanks');//Remetente
		$mail->addAddress($emailUsuario,'');//Destinatario
		$mail->Subject = $tituloEmail;
		$mail->msgHTML($message);
		
		$mail->send();

		// Configure o Gmail para permitir aplicativos de terceiro 
		// https://myaccount.google.com/lesssecureapps
    }
?>