$(function(){



	$(window).load(function(){
		//�ε��� �Ϸ�Ǿ�����,

		$('.out-line01').css('transition','1.1s');



	});




		$('.switch-btn').click(function () {

			$('.out-line01').toggleClass('switch-off');
			$('.switch-btn').toggleClass('switch-color');
			
		});




	});