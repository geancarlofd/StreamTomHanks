<?php 
//ENVIO DE EMAIL
		$nomeCompleto = $_POST["nomeCompleto"];
        $dataNascimento = $_POST["dataNascimento"];
        $emailUsuario = $_POST["email"];

        $chave = md5($nomeCompleto.$dataNascimento.$emailUsuario);

		$link ="http://localhost/StreamTomHanks/StreamTomHanks/php/cadastro/confirmar_usuario.php?chave=".$chave; //link de confirmacao + chave unica do usuario

		date_default_timezone_set('Etc/UTC');
		require '../PHPMailer/PHPMailerAutoload.php';
		
		$tituloEmail = "Confirmação de e-mail. Cadastro StreamHanks.";//Assunto/Titulo email

		//Corpo da mensagem que sera enviada para o usuario
		$message = 'Olá, '.$nomeCompleto.'.
					<br><br>Bem-Vindo ao StreamHanks, o sistema de streaming do Tom Hanks.
					<br>Estamos muito felizes que você decidiu fazer parte do time de assinates StreamHanks.
					<br><br>Agora falta apenas um passo, <a href="'.$link.'">clique aqui para confirmar o seu cadastro.</a>
					<br><br>Atenciosamente,<br><br>Equipe StreamHanks.';

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
?>