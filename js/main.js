$(function(){



	$(window).load(function(){
		//로딩이 완료되었을때,

		$('.out-line01').css('transition','1.1s');



	});




		$('.character').click(function () {

			$('.out-line01').toggleClass('switch-off');
		});



	});