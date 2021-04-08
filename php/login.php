<?php

    $login = $_POST["email"];
    $senha = $_POST["senha"];

    $con = mysqli_connect("localhost:3306", "root", "", "streamhanks"); /*Conectando com o banco*/
    
    $result = mysqli_query($con, "SELECT * FROM usuario WHERE Email = '{$login}' AND Senha = '{$senha}'");

    $row = mysql_num_rows($result);

    if($row >= 1){
        echo json_encode("valido");
        
    }else{
        echo json_encode("invalido");
    }
    
    mysqli_close($con);
?>