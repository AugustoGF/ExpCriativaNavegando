$(document).ready(function(){

		fLocalEventosClick();
		fLocalComunicaservidorListar("listar_filmes");

		var eh_admin = sessionStorage.getItem("admin");

		if(eh_admin == "s"){
			$("#bAdm").show();
		}
		else{
			$("#bAdm").hide();
		}

	});


	function fLocalEventosClick(){


		
		$("#bAdm").click(function(){

			window.location.href="inserir_filmes.html";

			return false;

		});
	

	}


	function fLocalComunicaservidorListar(arquivo){

		

		$.ajax({
			type: "POST",
			dataType: "json",
			url: "php/" + arquivo + ".php",
			success:function(retorno){


				var conteudoUltimos = "";

				conteudoUltimos = "<tr>" + "<td>" + " <b><h2> Últimos Adicionados </h2><b>" + "</td>" + "</tr>";

				conteudoUltimos += "<tr>";
				for (var i = 0; i < retorno["ultimos"].length; i++) {
					conteudoUltimos += "<td> <img src='" + retorno["ultimos"][i]["Imagem"] + "' width='200px' height='250px' /> </td>"
				}
				conteudoUltimos += "</tr>";
				



				var conteudoAcao = "";

				conteudoAcao = "<tr>" + "<td>" + " <b><h2> Filmes de Acão </h2><b>" + "</td>" + "</tr>";

				conteudoAcao += "<tr>";
				for (var i = 0; i < retorno["acao"].length; i++) {
					conteudoAcao += "<td> <img src='" + retorno["acao"][i]["Imagem"] + "' width='200px' height='250px' /> </td>"
				}
				conteudoAcao += "</tr>";

				
				



				conteudoAventura = "<tr>" + "<td>" + " <b><h2> Filmes de Aventura </h2><b>" + "</td>" + "</tr>";

				conteudoAventura += "<tr>";
				for (var i = 0; i < retorno["aventura"].length; i++) {
					conteudoAventura += "<td> <img src='" + retorno["aventura"][i]["Imagem"] + "' width='200px' height='250px' /> </td>"
				}
				conteudoAventura += "</tr>";

				




				conteudoComedia = "<tr>" + "<td>" + " <b><h2> Filmes de Comedia </h2><b>" + "</td>" + "</tr>";

				conteudoComedia += "<tr>";
				for (var i = 0; i < retorno["comedia"].length; i++) {
					conteudoComedia += "<td> <img src='" + retorno["comedia"][i]["Imagem"] + "' width='200px' height='250px' /> </td>"
				}
				conteudoComedia += "</tr>";

				




				conteudoSuspense = "<tr>" + "<td>" + " <b><h2> Filmes de Suspense </h2><b>" + "</td>" + "</tr>";

				conteudoSuspense += "<tr>";
				for (var i = 0; i < retorno["suspense"].length; i++) {
					conteudoSuspense += "<td> <img src='" + retorno["suspense"][i]["Imagem"] + "' width='200px' height='250px' /> </td>"
				}
				conteudoSuspense += "</tr>";

				




				conteudoTerror = "<tr>" + "<td>" + " <b><h2> Filmes de Terror </h2><b>" + "</td>" + "</tr>";

				conteudoTerror += "<tr>";
				for (var i = 0; i < retorno["terror"].length; i++) {
					conteudoTerror += "<td> <img src='" + retorno["terror"][i]["Imagem"] + "' width='200px' height='250px' /> </td>"
				}
				conteudoTerror += "</tr>";

				

				$("#tableListarFilmesUltimos").html(conteudoUltimos);
				$("#tableListarFilmesAcao").html(conteudoAcao);
				$("#tableListarFilmesAventura").html(conteudoAventura);
				$("#tableListarFilmesComedia").html(conteudoComedia);
				$("#tableListarFilmesSuspense").html(conteudoSuspense);
				$("#tableListarFilmesTerror").html(conteudoTerror);

			}

		});

	}


