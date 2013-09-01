$(document).ready(function(){

	$('.payment-head').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$(this).next().addClass('close');
		} else {
			$(this).addClass('open');
			$(this).next().removeClass('close');
		}
	});

});