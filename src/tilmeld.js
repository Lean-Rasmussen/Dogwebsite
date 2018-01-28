var tilmeldStartSide = function(){
	if(window.innerWidth < 750){
	$(".tilmeld__container__tilmeld-info").css("transform", "translateX(0%)");
	$(".tilmeld__container__tilmeld-form").css("transform", "translateX(150%)");
	}
};
var tilmeldForm = function(){
	if(window.innerWidth < 750){
	$(".tilmeld__container__tilmeld-info").css("transform", "translateX(-150%)");
	$(".tilmeld__container__tilmeld-form").css("transform", "translateX(0%)");
	}
};