function LogIn(opts) {
	OAuth.popup("youtube",{cache: true})
				.done(function(result) {
					result.me()
					.done(function (response) {
							// Inicializo las keys...
							localStorage["IdUsuario"] = response.id;
							localStorage["NombreUsuario"] = response.name;
							localStorage["Idioma"] = response.locale;
							localStorage["Avatar"] = response.avatar +0;
							localStorage["Email"] = response.email;

							toastr.success('Bienvenido ' + response.firstname + ' a Ramjets',"Access",opts);
							window.location.hash = '#/app/dashboard-variant-1';
							//window.location.hash = '#/app/dashboard-variant-1';
						}).fail(function (err) {
							// body...
							toastr.error("Ha ocurrido un error.\nEl error relasionado es el siguiente:\n"+JSON.stringify(err), "Login Error!", opts);
							alert();
					    	$scope.complete();
						});
				})
				.fail(function (err) {
					alert("Ha ocurrido un error.\nEl error relasionado es el siguiente:\n"+JSON.stringify(err));
				    $scope.complete();
				  //handle error with err
	});
}