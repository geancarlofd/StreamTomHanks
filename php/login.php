<?php
    $login = $_POST["usuario"];
    $senha = $_POST["usuarioSenha"];


    $con = mysqli_connect("localhost:3306", "root", "", "streamhanks"); /*Conectando com o banco*/
    
    $result = mysqli_query($con, "SELECT * FROM usuario WHERE Email = '{$login}' AND Senha = '{$senha}' AND status = 1"); //resultado da query armazenando

    $row = mysqli_num_rows($result);//armazenando rows

    if($row >= 1){
        echo json_encode("valido");
            
    }else{
        echo json_encode("invalido");
    }
        
    mysqli_close($con);

?>