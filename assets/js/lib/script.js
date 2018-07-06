$( document ).ready(function() {

	$(".card").on("click", function(){
	$(this).toggleClass("card--open");

	});

	$(".card__like").on("click", function(event){
		event.preventDefault();
	$(this).toggleClass("card__like--red");

 	});

});