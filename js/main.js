$(function(){


$(window).ready(function(){
	//�ε����϶�,

	$('.star').addClass('blind');
});


	$(window).load(function(){
		//�ε��� �Ϸ�Ǿ�����,

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