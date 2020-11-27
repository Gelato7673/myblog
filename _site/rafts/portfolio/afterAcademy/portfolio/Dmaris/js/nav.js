		// login
		$('#login_page').hide();
		$('#login').click(function(){
			$('#login_page').show()
		});
		$('.closeup>span').click(function(){
			$('#login_page').hide()
		});


		// nav
		$('#nav>li>ul').hide();
		$('#nav>li>a').mouseover(function(){
			$(this).siblings('img').addClass('on')
			.parent('li').children('ul').slideDown(1000)
			// .parent('li').siblings('li').children('ul').slideUp()
		});
		$('#nav>li').mouseleave(function(){
			$(this).children('img').removeClass('on')
			.parent('li').children('ul').slideUp()
		});

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