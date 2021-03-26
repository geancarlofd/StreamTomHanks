
 <?php

	$nomeUsuario = $_POST["nomeCompleto"];
	$emailUsuario = $_POST["email"];
	echo $nomeUsuario;

	date_default_timezone_set('Etc/UTC');
	require 'PHPMailer/PHPMailerAutoload.php';
    
	$tituloEmail = "Cadastro StreamHanks";

	$message = 'Olá, '.$nomeUsuario.'. Seu cadastro foi realizado com sucesso.<br><br>Bem-Vindo ao StreamHanks, o sistema de streaming do Tom Hanks.
				<br><br>Atenciosamente,<br><br>Equipe StreamHanks.';

	$mail= new PHPMailer;
	$mail->IsSMTP(); 
	$mail->CharSet = 'UTF-8';   
	$mail->SMTPDebug = 2;       // 0 = nao mostra o debug, 2 = mostra o debug
	$mail->SMTPAuth = true;     
	$mail->SMTPSecure = 'ssl';  
	$mail->Host = 'smtp.gmail.com'; 
	$mail->Port = 465; 
	$mail->Username = 'streamhanks'; 
	$mail->Password = '1234wilson';
	$mail->SetFrom('streamhanks@gmail.com', 'Stream Hanks');
	$mail->addAddress($emailUsuario,'');
	$mail->Subject = $tituloEmail;
	$mail->msgHTML($message);
       
	$mail->send();

	// Configure o Gmail para permitir aplicativos de terceiro 
	// https://myaccount.google.com/lesssecureapps


?>
