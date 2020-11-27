		// branch

		$('#branch>.left').mouseenter(function(){
			$('.branch_sub').animate({
				'marginLeft':'90px'
			})
		});

		$('#branch>.left').mouseleave(function(){
			$('.branch_sub').animate({
				'marginLeft':'120px'
			})
		});

		$('#branch>.right').mouseenter(function(){
			$('.branch_sub').animate({
				'marginLeft':'150px'
			})
		});
		$('#branch>.right').mouseleave(function(){
			$('.branch_sub').animate({
				'marginLeft':'120px'
			})
		});

		// popup
		$('#close_popup').click(function(){
			$('#popup').hide()
		});

		// slider

		// var myInterval = setInterval(function() {
		// 	console.log(new Date());
		// }, 1000);
		// $(selector).animate(obj, time, callback)

		$(function(){

			var width = 980;
			var animationSpeed = 1000;
			var pause = 3000;
			var currentSlide =1;

			var $slider = $('.span');
			var $slideContainer = $slider.find('#visual')
			var $slides = $slideContainer.find('.slide')

			var interval;
			function startSlider(){
				interval = setInterval(function(){
				$slideContainer.animate({'margin-left':'-='+width}, animationSpeed, function(){
					currentSlide++;
					if(currentSlide === $slides.length){
						currentSlide = 1;
						$slideContainer.css('margin-left',0);
		
						}
					});
				}, pause);
			}
			
			function stopSlider(){
				clearInterval(interval);
			}

			$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

			startSlider();
		});

		
