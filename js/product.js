$(window).on("load", function() {
	$(".product__main-slider").owlCarousel({
		loop: false,
		rewind: true,
    	nav:true,
    	dots:false,
		items:1
	});

	$(".product__secondary-slider").owlCarousel({
		loop: false,
		rewind: true,
    	nav:true,
    	dots:false,
		items:4
	});
});
