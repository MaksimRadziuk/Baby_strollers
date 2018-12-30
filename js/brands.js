$(document).ready(function(){

	$('.search__select-filter a').click(function(){
		$('.search__select-filter a').removeClass('active');
		$(this).addClass('active');
	});

});


$(window).on("load", function() {

	$(".brands__slider-wrap").owlCarousel({
		loop: true,
		rewind: true,
    	nav:true,
		items:6,
		autoplay:true,
		smartSpeed:4000,
		autoplayTimeout:3500,
		responsive : {
		    1320 : {
		        items:5
		    }
		}
	});

});