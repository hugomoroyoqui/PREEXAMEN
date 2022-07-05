$(document).ready(function(){
	
	/* 

	Como no tenemos un ID de referencia hay que tomar un elemento existente
	antes del elemento que queremos seleccionar, en este caso la etiqueta <body>

	Una vez seleccionado el body, tomamos todas las etiquetas p, y con 'gt'
	le damos la instruccion de cuantas etiquetas debe descartar, en este ejerccio
	las 2 primeras, osea el indice 1

	Por ultimo a la seleccion le asignamos la propiedad 'color' con la funcion 'css'
	y como parametro el color a asignar, abrir archivo HTML en navegador para 
	ver resultado.

	*/

	// Opcion 1 (Comprimido)
	$('body p:gt(1)').css('color', 'blue');

	// Opcion 2
	// $('body').find('p:gt(1)').css('color', 'blue');

	// Opcion 3 (Desglosado)
	// var selector = $('body').find('p:gt(1)');
	// selector.css('color', 'blue');
});