$(document).ready(function(){

  $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 50.1563;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});


    $('.scroll-link').on('click', function(event){
    		event.preventDefault();
    		var sectionID = $(this).attr("data-id");
    		scrollToID('#' + sectionID, 750);
    	});

      function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}

 });
