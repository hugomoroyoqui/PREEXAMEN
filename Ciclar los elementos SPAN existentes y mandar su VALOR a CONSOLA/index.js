$(document).ready(function(){
	
    var longitud = $("body").find("span").length;

    for(var i = 0; i <= longitud -1; i++){
        console.log($("body").find("span").eq(i).text());
    }

});