$(document).ready(function(){

	/* 

	Como no tenemos un ID de referencia hay que tomar un elemento existente
	antes del elemento que queremos seleccionar, en este caso la etiqueta <body>

	Una vez seleccionado el body, seleccionamos de entre todas las etiquetas '<a>'
	todas las que tengan la clase '.SOYUNLINK' y una vez realizado el filtro
	por clase, con el parametro ':first' expecificamos que solamente tomaremos 
	el primer elemento de la lista encontrada que coincida con tipo de elemento 
	y clase

	Con la funcion 'text()' especificamos la asignación de texto a dicho elemento
	Realizamos de nuevo la misma seleccion anterior para acceder con la funcion 
	'attr' al atributo 'href'

	*/

	$('body a.SOYUNLINK:first').text($('body a.SOYUNLINK:first').attr('href'));

	// Opcion 2 (Desglosado)
	/*
		var atributo = $('body').find('a.SOYUNLINK:first').attr('href');
		$('body').find('a.SOYUNLINK:first').text(atributo);
	*/

	// Opcion 3
	/*
		var seleccion = $('body').find('a.SOYUNLINK:first');
		var atributo = seleccion.attr('href');
		seleccion.text(atributo);
	*/

	// Opcion 4
	/*
		var seleccion = $('body').find('a.SOYUNLINK:first');
		seleccion.text(seleccion.attr('href'));
	*/
});