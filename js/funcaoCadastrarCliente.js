$(document).ready(function(){

	fLocalEventosClick();

});


function fLocalEventosClick(){


	$("#bGravar").click(function(){

		fLocalComunicaservidorCadastro("cadastrar_cliente");

		return false;

	});


}



function fLocalComunicaservidorCadastro(arquivo){


	var senha_hash = $.MD5($('#senha_cadastro').val());

	$("#SenhaCrip").val(senha_hash);

	var valores = $("form").serialize(); 



	$.ajax({
		type: "POST",
		dataType: "json",
		data: valores, 
		url: "php/" + arquivo + ".php",
		success:function(retorno){


		}

	});

}