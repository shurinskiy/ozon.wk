import 'owl.carousel';

(() => {

	$('.insta__items').owlCarousel({
		loop: true,
		items: 4,
		margin: 12,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['insta__prev', 'insta__next']
	});

})();
