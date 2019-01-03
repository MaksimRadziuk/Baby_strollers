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

	var docscroll=$(document).scrollTop();
	if(docscroll>90){
    	$('header').addClass('fixed');
    	$('#toTop').addClass('active');
    	$('.popup__menu').addClass('fixed');
	}else{
    	$('header').removeClass('fixed');
    	$('#toTop').removeClass('active');
    	$('.popup__menu').removeClass('fixed');
	}

	$(window).scroll(function(){
		var docscroll=$(document).scrollTop();
		if(docscroll>90){
	    	$('header').addClass('fixed');
	    	$('#toTop').addClass('active');
	    	$('.popup__menu').addClass('fixed');
		}else{
	    	$('header').removeClass('fixed');
	    	$('#toTop').removeClass('active');
	    	$('.popup__menu').removeClass('fixed');
		}
	});

	$('#toTop').click(function(){
		$('body,html').animate({scrollTop:0},800);
	});


//AIMMENU

	$(".popup__submenu-item").mouseover(function(){
		$(this).addClass('active');
	});
	$(".popup__submenu-item").mouseleave(function(){
		$(this).removeClass('active');
	});


	var $menu = $(".popup__menu-list");
    $menu.menuAim({
        activate: activateSubmenu,
        deactivate: deactivateSubmenu
    });
    function activateSubmenu(row) {
        var $row = $(row),
            submenuId = $row.data("submenuId"),
            $submenu = $("#" + submenuId),
            height = $menu.outerHeight(),
            width = $menu.outerWidth();
        $submenu.css({
            display: "block"
        });
        $row.find("a").addClass("maintainHover");
    }

    function deactivateSubmenu(row) {
        var $row = $(row),
            submenuId = $row.data("submenuId"),
            $submenu = $("#" + submenuId);
        $submenu.css("display", "none");
        $row.find("a").removeClass("maintainHover");
    }
    $(".popup__menu-list>li").click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function() {
        $(".popup__submenu-list").css("display", "none");
        $("a.maintainHover").removeClass("maintainHover");
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
