// navbar scroll

$(window).on('scroll', function () {

  "use strict";

  var nav_offset = $('nav').height() + 50;
  var scroll = $(window).scrollTop();

  if ($('nav').length) {

    $(window).scroll(function () {

        if (scroll >= nav_offset ) {

          $("nav").addClass("navbar-ground");

        } else {

          $("nav").removeClass("navbar-ground");
        }
    });
  }
});

// pgw slider
$(document).ready(function() {
  $('.pgwSlider').pgwSlider();
});


// popup slider

$(document).ready(function() {

	$(".navbar ul li a").each(function() {   
    if (this.href == window.location.href) {
      $(".navbar ul li a").parent().removeClass("active");
			$(this).parent().addClass("active");
		}
		});
		
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

});