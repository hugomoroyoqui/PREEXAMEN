$(document).ready(function(){

	var atributo = $("body a.SOYUNLINK:first").attr("href");

    $("body a.SOYUNLINK:first").text(atributo);

});