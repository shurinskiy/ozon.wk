import 'owl.carousel';

(() => {

	$('.workers__items').owlCarousel({
		loop: true,
		items: 4,
		margin: 25,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['workers__prev', 'workers__next']
	});

})();
