$(document).ready(function(){
	// Opcion 1 (Comprimido)
	$('body p:gt(1)').css('color', 'blue');

	// Opcion 2
	// $('body').find('p:gt(1)').css('color', 'blue');

	// Opcion 3 (Desglosado)
	// var selector = $('body').find('p:gt(1)');
	// selector.css('color', 'blue');
});