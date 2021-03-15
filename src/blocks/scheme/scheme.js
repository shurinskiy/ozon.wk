import 'owl.carousel';

(() => {

	$('.scheme__items').owlCarousel({
		loop: true,
		items: 6,
		margin: 25,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['scheme__prev', 'scheme__next']
	});

})();
