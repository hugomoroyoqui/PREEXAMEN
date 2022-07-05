$(document).ready(function(){
	$('body a.SOYUNLINK:first').text($('body a.SOYUNLINK:first').attr('href'));

	// Opcion 2 (Desglosado)
	/*
		var atributo = $('body').find('a.SOYUNLINK:first').attr('href')
		$('body').find('a.SOYUNLINK:first').text(atributo);
	*/
});