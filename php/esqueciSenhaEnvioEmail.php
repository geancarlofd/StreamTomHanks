<?php

date_default_timezone_set('Etc/UTC');
require '../PHPMailer/PHPMailerAutoload.php';

$tituloEmail = "título";

$message = 'mensagem';

$mail= new PHPMailer;
	$mail->IsSMTP(); 
	$mail->CharSet = 'UTF-8';   
	$mail->SMTPDebug = 3;       // 0 = nao mostra o debug, 2 = mostra o debug
	$mail->SMTPAuth = true;     
	$mail->SMTPSecure = 'tls';  
	$mail->Host = 'smtp.gmail.com'; 
	$mail->Port = 587; 
	$mail->Username = 'streamhanks'; 
	$mail->Password = '1234wilson';
	$mail->SetFrom('streamhanks@gmail.com', 'Stream Hanks');
	$mail->addAddress('giselecavalli28@gmail.com','');
	$mail->Subject = $tituloEmail;
	$mail->msgHTML($message);
    $mail->send();

// Configure o Gmail para permitir aplicativos de terceiro 
// https://myaccount.google.com/lesssecureapps


?>