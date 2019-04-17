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
$('.navbar a').on('click', function (e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900);
	}
});