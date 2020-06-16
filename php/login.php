<?php
	
	session_start();	

	$login = $_POST["Login"];
	$senha = $_POST["SenhaCrip"];
	

	$conexao = mysqli_connect("127.0.0.1", "root", "", "apmovies");



	$resultadoUsuario = mysqli_query($conexao, "SELECT * FROM clientess where Login='".$login."' and Senha='".$senha."' ");

	$retorno["status"] = "nao existe";

	$i = 0;
	while($linha = mysqli_fetch_assoc($resultadoUsuario)){


		$retorno["status"] = "existe";
		$retorno["Nome"] = $linha["Nome"];
		$retorno["Sobrenome"] = $linha["Sobrenome"];
		$retorno["CPF"] = $linha["CPF"];
		$retorno["Estado"] = $linha["Estado"];
		$retorno["Cidade"] = $linha["Cidade"];
		$retorno["Idade"] = $linha["Idade"];
		$retorno["Sexo"] = $linha["Sexo"];
		$retorno["Telefone"] = $linha["Telefone"];
		$retorno["Email"] = $linha["Email"];
		$retorno["Login"] = $linha["Login"];
		$retorno["Admin"] = $linha["Admin"];
				
		$i++;
	}
		
	echo json_encode($retorno);

?>

