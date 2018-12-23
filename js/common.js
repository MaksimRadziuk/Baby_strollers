$(document).ready(function(){




});

$(window).on("load", function() {
	$(".main__slider-wrap").owlCarousel({
		loop: false,
		rewind: true,
    	nav:true,
		items:1,
		autoplay:true,
		autoplayTimeout:7000
	});

	$(".popular__slider-wrap").owlCarousel({
		loop: true,
		rewind: true,
    	nav:true,
		items:4
	});

	$(".brands__slider-wrap").owlCarousel({
		loop: true,
		rewind: true,
    	nav:true,
		items:6,
		autoplay:true,
		smartSpeed:4000,
		autoplayTimeout:3500
	});

	$(".new__slider-wrap").owlCarousel({
		loop: true,
		rewind: true,
    	nav:true,
		items:4
	});
});
