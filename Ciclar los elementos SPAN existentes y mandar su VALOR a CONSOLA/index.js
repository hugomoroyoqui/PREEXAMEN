$(document).ready(function(){
	for (var i = 0; i < $('body').find('span').length; i++) {
		console.log($('body').find('span').eq(i).text());
	}

	// Opcion 2 (Desglosado)
	/*
		var longitud = $('body').find('span').length;
		for (var i = 0; i < longitud; i++) {
			var texto = $('body').find('span').eq(i).text();
			console.log(texto);
		}
	*/

});