$(document).ready(function(){
	/* 

	Generamos un ciclo 'for', el cual tome como longitud la cantidad de elementos
	'span' existentes cuyo valor podemos obtener con el metodo 'find' y accediendo
	a la propiedad 'length'

	Por cada elemento 'span' vamos a ciclar 1 vez por lo tanto en cada ciclo
	vamos a enviar un mensaje a consola con 'console.log' cuyo valor sera el texto
	del 'span' que se encuentre en el indice actual con la funcion 'eq'

	La funcion 'text()' nos sirve para obtener el texto de un elemento, comunmente 
	se suele utilizar en etiquetas 'p', 'span', 'h4', 'a', etc.

	*/

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