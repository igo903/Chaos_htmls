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

	$('.popover-icon').mouseover(function(){
		$('.pop-hint-msg').show();
	}).mouseout(function(){
		$('.pop-hint-msg').hide();
	});

	$('.head-title').click(function(){
		if($(this).hasClass('close')){
			$(this).removeClass('close');
			$(this).next().show();
		} else {
			$(this).addClass('close');
			$(this).next().hide();
		}
	});


	// popup
	/**
	 * show popup
	 * selector - the jQuery selector of the popup
	 */
	var showPopup = function(selector) {
		var body = $('body');
		$('.alpha').width(body.width()).height(body.height()).css('display', 'block');
		var popup = $(selector);
		popup.css('display', 'block').css('margin', -popup.height() / 2 + 'px 0 0 ' + (-popup.width() / 2) + 'px');
	};
	$('.popup .close-btn, .alpha').bind('click', function() {
		$('.alpha').css('display', 'none');
		$('.popup').css('display','none');
		$(this).parents('.popup').css('display', 'none');
	});

	$('.submit-btn').bind('click', function(){
		showPopup('.popup-modal');
	});




});