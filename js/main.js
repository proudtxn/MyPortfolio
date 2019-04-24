// LOCATE ME GOOGLE MAP JS
var map;

function createMap() {
	var options = {
		center: { lat: 30.5052, lng: -97.8203 },
		zoom: 10
	};

	// New Map
	map = new google.maps.Map(document.getElementById('map'), options);

	// Add Marker
	var marker = new google.maps.Marker({
		position: { lat: 30.5052, lng: -97.8203 },
		map:map
	})
}



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


	// ACTIVE LINK SWITCHING
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top - 200;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});


	// CONTACT FORM SUBMISSION
	$('.submit').click(function (e) {

		var name = $('.name').val();
		var email = $('.email').val();
		var subject = $('.subject').val();
		var message = $('.message').val();
		var statusElement = $('.status');
		statusElement.empty();

		if (name.length < 2) {
			e.preventDefault()
			statusElement.append(alert("Your name is not valid"));
		}
		else if (email.length <= 5 && !email.includes('@') && !email.includes('.')) {
			e.preventDefault()
			statusElement.append(alert("Your email address is not a valid address."));
		}
		else if (subject.length < 2) {
			e.preventDefault()
			statusElement.append(alert("Your subject does not contain enough characters."));
		}
		else if (message.length < 10) {
			e.preventDefault()
			statusElement.append(alert("Your message does not contain the minimum characters."));
		}
		else {
			statusElement.empty();
			statusElement.append(alert("Thank you for contacting me.  I will get back to you as soon as possible."));
		}
	});


});
