$(document).ready(function(){
	$(function(){
		$("#toggle1").on("click", function() {
			$("#topnav").slideToggle();
			$(".tagline").fadeToggle();
		});
	});

	$(function(){
		$("#toggle2").on("click", function() {
			$("#subnav").slideToggle();
		});
	});

	$(window).resize(function() {
		if($(window).width() > 768)
			$('#topnav','#subnav').show();
	});

	$(function(){
		$("#theTarget").skippr();
	});

	$(function(){
		$('.dropdown li a').each(function(){
	  var url = $(this).attr('href');
	  if(location.href.match(url)) {
		 $(this).addClass('current');
	 } else {
		$(this).removeClass('current');
	 }
 		});
	});


});

