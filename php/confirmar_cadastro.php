<?php

$email = $_GET['email'];

if(!empty($email)){
    $conexao = mysqli_connect("127.0.0.1", "root", "", "apmovies");
    mysqli_query($conexao, "UPDATE clientess set Flg_Autenticado = '1' where Email='".$email."'");
    echo "Email Confirmado!";
}

?>
