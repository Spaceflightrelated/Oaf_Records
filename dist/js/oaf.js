$(function() {
	$('.sm-menu').on('click', function() {
		$('nav .nav-menu').removeClass('hide');
	});

	$('.sm-menu-close').on('click', function() {
		$('nav .nav-menu').addClass('hide');
	});

	$('.nav-menu a').on('click', function() {
		sizeHandler();
	});

	function sizeHandler() {
		if ($(window).width()  > 899 ) {
			$('nav .nav-menu').removeClass('hide');
		}
		else {
			$('nav .nav-menu').addClass('hide');
		}
	}

	sizeHandler();

	$(window).resize(function(){
		sizeHandler();
	});

	function scrollToSection(target) {
		$('html,body').animate({
			scrollTop: $(target).offset().top - ($('#navbar-main').offset().top)
		}, 1000);
	}

	$('.intra-link').on('click', function() {
		scrollToSection($(this).attr('href'));
	});

	$('#navbar-main a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					scrollToSection(target);
					return false;
				} 
		}
	});

});