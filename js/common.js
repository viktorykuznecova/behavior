$('.single-slide').slick({
	infinite: true,
	autoplay: true,
	slidesToShow: 1,
	pauseOnHover: false,
	autoplaySpeed: 500,
	slidesToScroll: 1,
	fade: true
	
});

$(document).ready(function () {

	$('.burger-button').on('click',function(){

		$(this).toggleClass('on');

		$('.visible__menu').toggleClass('open');
	});




	$('.visible__menu .main-menu-item a').on('click',function(){
		$('.visible__menu').toggleClass('open');
		$('.burger-button').toggleClass('on')
	});

});



