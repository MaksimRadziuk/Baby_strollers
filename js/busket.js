$(document).ready(function(){

	$('.table__cell-delete>span').click(function(){
		$(this).parent('td').parent('tr').remove();
	});	

	$('.minus').click(function(){
		var i = parseInt($(this).siblings('input').val(), 10);
		var result = i-1;
		$(this).siblings('input').val(result);
		var singlePrice = parseInt($(this).parent('form').parent('td').siblings('.table__cell-price').children('span').text());
		
		var finalSum = singlePrice*result;
		$(this).parent('form').parent('td').siblings('.table__cell-totalPrice').children('span').text(finalSum);
		if(i<=0){
			$(this).siblings('input').val('0');
			$(this).parent('form').parent('td').siblings('.table__cell-totalPrice').children('span').text('0');
		}
		else{}
	});

	$('.plus').click(function(){
		var i = parseInt($(this).siblings('input').val(), 10);
		var result = i+1;
		$(this).siblings('input').val(result);
		var singlePrice = parseInt($(this).parent('form').parent('td').siblings('.table__cell-price').children('span').text());
		
		var finalSum = singlePrice*result;
		$(this).parent('form').parent('td').siblings('.table__cell-totalPrice').children('span').text(finalSum);
	});


	$('#busketTrigger1').click(function () {
		$('#menu0').removeClass('active');
		$('#menu1').addClass('active');
		$('.busket__tabs-item').removeClass('active');
		$('.busket__tabs-item.second').addClass('active');
	});
	$('#busketTrigger2').click(function () {
		$('#menu1').removeClass('active');
		$('#menu2').addClass('active');
		$('.busket__tabs-item').removeClass('active');
		$('.busket__tabs-item.third').addClass('active');
	});
	$('#busketTrigger3').click(function () {
		$('#menu2').removeClass('active');
		$('#menu3').addClass('active');
		$('.busket__tabs-item').removeClass('active');
		$('.busket__tabs-item.fourth').addClass('active');
	});
	
});

$(window).on("load", function() {
	
});
