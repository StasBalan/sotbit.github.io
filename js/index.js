$(document).ready(function(){
	var clock;
	clock = $('.clock').FlipClock({
		clockFace : "HoursCounter",
		autoStart : false,
	});

	clock.setTime(5000);
	clock.setCountdown(true);
	clock.start();

	$('.sl').slick({
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	$('.main-sl').slick({
		infinite: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
        ]
	});

	$(function () {
	    $('.add').on('click',function(){
	        var $qty=$(this).closest('.sum').find('.qty');
	        var currentVal = parseInt($qty.val());
	        if (!isNaN(currentVal)) {
	            $qty.val(currentVal + 1);
	        }
	    });
	    $('.minus').on('click',function(){
	        var $qty=$(this).closest('.sum').find('.qty');
	        var currentVal = parseInt($qty.val());
	        if (!isNaN(currentVal) && currentVal > 0) {
	            $qty.val(currentVal - 1);
	        }
	    });
	});
});


