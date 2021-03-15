import 'owl.carousel';

(() => {

	$('.license__items').owlCarousel({
		loop: true,
		items: 3,
		margin: 25,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['license__prev', 'license__next']
	});

})();
