<?php

	$nome = $_POST["Nome"];
	$sobrenome = $_POST["Sobrenome"];
	$CPF = $_POST["CPF"];
	$estado = $_POST["Estado"];
	$cidade = $_POST["Cidade"];
	$idade = $_POST["Idade"];
	$sexo = $_POST["Sexo"];
	$telefone = $_POST["Telefone"];
	$email = $_POST["Email"];
	$login = $_POST["Login"];
	$senha = $_POST["SenhaCrip"];

	$conexao = mysqli_connect("127.0.0.1", "root", "", "apmovies");



	mysqli_query($conexao, "INSERT INTO clientess (Nome, Sobrenome, CPF, Estado, Cidade, Idade, Sexo, Telefone, Email, Login, Admin, Senha) VALUES ('$nome', '$sobrenome', '$CPF', '$estado', '$cidade', '$idade', '$sexo', '$telefone', '$email', '$login', '', '$senha')");



?>