
 <?php
	/*INSERINDO DADOS NA TABELA USUARIO (a partir do cadastro - novo usuario)*/

    /*Dados dos Campos de Cadastro*/
    $nomeCompleto = $_POST["nomeCompleto"];
    $dataNascimento = $_POST["dataNascimento"];
    $email = $_POST["email"];
    $senhaHash = $_POST["senhaHash"];
    $cartao_NomeCompleto = $_POST["cartao_NomeCompleto"];
    $cartao_Numero = $_POST["cartao_Numero"];
    $cartao_Validade = $_POST["cartao_Validade"];
    $cartao_CodigoSeguranca = $_POST["cartao_CodigoSeguranca"];
    $cpf = $_POST["cpf"];

	$chave = md5($nomeCompleto.$dataNascimento.$email);//Chave para a confirmacao do email
	echo($chave);

    $con = mysqli_connect("localhost:3306", "root", "", "streamhanks"); /*Conectando com o banco*/

    /*Executando a query para o banco*/
    /*Sera a insercao de dados na tabela*/
    mysqli_query($con, "INSERT INTO usuario (NomeCompleto, DataNascimento, Email, Senha, Cartao_NomeCompleto, Cartao_Numero, Cartao_Validade, Cartao_CodigoSeguranca, Cpf, chave)
                    VALUES('$nomeCompleto','$dataNascimento','$email','$senhaHash','$cartao_NomeCompleto','$cartao_Numero','$cartao_Validade','$cartao_CodigoSeguranca','$cpf','$chave')");
		
		
	//--------------------------------------------------------------------------------------------------------------------------------------


	//<-- ENVIO DO EMAIL PARA CONFIRMACAO DO CADASTRO --> 

	$emailUsuario = $_POST["email"];//email do usuario
	$link ="http://localhost/StreamTomHanks/StreamTomHanks/php/confirmacaoUsuario.php?chave=".$chave; //link de confirmacao + chave unica do usuario

	date_default_timezone_set('Etc/UTC');
	require 'PHPMailer/PHPMailerAutoload.php';
    
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
