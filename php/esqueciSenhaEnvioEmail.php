<?php

date_default_timezone_set('Etc/UTC');
require '../PHPMailer/PHPMailerAutoload.php';

$tituloEmail = "título";

$message = 'mensagem';

$mail= new PHPMailer;
$mail->IsSMTP(); 

$mail->CharSet = 'UTF-8';   
$mail->SMTPDebug = 2;       // 0 = nao mostra o debug, 2 = mostra o debug
$mail->SMTPAuth = true;     
$mail->SMTPSecure = 'ssl';  
$mail->Host = 'smtp.gmail.com'; 
$mail->Port = 465; 

$mail->Username = 'giselecavalli28'; 
$mail->Password = 'senha';

$mail->SetFrom('giselecavalli28@gmail.com', 'Stream TomHanks');
$mail->addAddress('giselecavalli28@gmail.com','');

$mail->Subject = $tituloEmail;
$mail->msgHTML($message);
   
if(!$mail->Send()) {
    echo '<br/>Error : ' . $mail->ErrorInfo;
    } else {
        echo 'Ok!!';
    } 

// Configure o Gmail para permitir aplicativos de terceiro 
// https://myaccount.google.com/lesssecureapps


?>