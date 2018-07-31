$( document ).ready(function() {

	$(".card").on("click", function(event){
	$(this).toggleClass("card--open");

	});

	$(".card__like").on("click", function(event){
		event.preventDefault();
	$(this).toggleClass("card__like--red");

 	});

 	$(".card__follow-btn").on("click", function(event){
		event.preventDefault();
	$(this).toggleClass("card__follow-btn--following");
	 
	$("#image").change(function(evt){
	 var image='assets/images/squared/'+$(this).val();
	$('.create__image .create__img').attr('src', image);
		//console.log("change" , $(this).val());
	 });

  $("#author").change(function(evt){
    var image='assets/images/profiles/'+$(this).val();
  $('.create__profile .create__img').attr('src', image);
    //console.log("change" , $(this).val());

  });

	});
});
