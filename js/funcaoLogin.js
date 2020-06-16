$(document).ready(function(){

	fLocalEventosClick();

});


function fLocalEventosClick(){


	$("#bEntrar").click(function(){

		fLocalComunicaservidorLogin("login");

		return false;

	});


}


function fLocalComunicaservidorLogin(arquivo){

	var senha_hash = $.MD5($('#senha_login').val());

	$("#SenhaCrip").val(senha_hash);
	
	var valores = $("form").serialize(); 

	$.ajax({
		type: "POST",
		dataType: "json",
		data: valores, 
		url: "php/" + arquivo + ".php",
		success:function(retorno){
			if(retorno["status"] == "existe"){

				sessionStorage.setItem("nome", retorno["Nome"]);
				sessionStorage.setItem("admin", retorno["Admin"]);

				window.location.href="listar_filmes.html";
				
			}else{	
				alert("usuario nao autentica");
			}
		},
		

	});

}

