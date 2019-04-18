$(document).ready(function () {

	// LOGO CHANGE UPON SCROLLING
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('header').addClass('black');
		} else {
			$('header').removeClass('black');
		}
	});


	// NAVBAR CHANGE UPON SCROLLING
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('nav').addClass('black');
		} else {
			$('nav').removeClass('black');
		}
	});
	

	// SMOOTH SCROLLING - jQuery
	var scrollLink = $('.scroll');

	// Smooth scrolling
	scrollLink.click(function (e) {
		e.preventDefault();
		$('body,html').animate(
			{
				scrollTop: $(this.hash).offset().top
			},
			1000
		);
	});

	// Active link switching
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top - 20;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});
});
