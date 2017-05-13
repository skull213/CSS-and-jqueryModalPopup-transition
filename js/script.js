$(function(){

	$("#sign-up-control").on("click",function(event){

		event.preventDefault();

		$("#sign-up").addClass("moveIn");

		$("#overlay").removeClass("hide"); //you remove the .removeClass first than bottom code runs

		//wait for 1milisecond before the bottom code
		//wait for 1 to finish than execute the function settimeout
		setTimeout(function(){
			$("#overlay").addClass("fadeIn");
		},1); 
		


	});

	$(".close-button").on("click",function(){

		$("#sign-up").removeClass("moveIn");

		$("#overlay").removeClass("fadeIn");

		//wait for transition to compleate
		$("#overlay").one("transitionend",function(){  //.one means the function is activated only one time
			$("#overlay").addClass("hide");
		});
		

	});

});