$(document).ready(function(){

	$('#menuTrigger').click(function(){
		$('#popup__background').toggle();
		$('.popup__menu').toggle();
		$(this).toggleClass('active');
	});

	$('#popup__background').click(function(){
		$('.popup').hide();
		$('#menuTrigger').toggleClass('active');
	});

	$(".js-range-slider").ionRangeSlider();

	var priceFromScale = $('.irs-from').text();
	var priceToScale = $('.irs-to').text();
	$('#priceFrom').val(priceFromScale);
	$('#priceTo').val(priceToScale);

	$('.irs-from').bind("DOMSubtreeModified",function(){
	    var priceFromScale = $('.irs-from').text();
	    $('#priceFrom').val(priceFromScale);
	});
	$('.irs-from').bind("DOMSubtreeModified",function(){
	    var priceToScale = $('.irs-to').text();
	    $('#priceTo').val(priceToScale);
	});

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
		autoplayTimeout:3500,
		responsive : {
		    1320 : {
		        items:5
		    }
		}
	});

	$(".new__slider-wrap").owlCarousel({
		loop: true,
		rewind: true,
    	nav:true,
		items:4
	});
});
