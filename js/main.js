$(function(){


$(window).ready(function(){
	//로딩중일때,

	$('.star').addClass('blind');
});


	$(window).load(function(){
		//로딩이 완료되었을때,

		$('.out-line01').css('transition','1.1s');

	});




		$('.switch-btn').click(function () {

			$('.out-line01').toggleClass('switch-off');
			$('.switch-btn').toggleClass('switch-color');
			$('.star').toggleClass('blind');
			$('.address').toggleClass('address-light');
			$('.character-012').toggleClass('character-012-ani');
			$('.character-012-shadow').toggleClass('character-012-shadow-ani');

		});






	});