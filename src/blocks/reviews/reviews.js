import 'owl.carousel';

(() => {

	$('.reviews__items').owlCarousel({
		loop: true,
		items: 4,
		margin: 50,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['reviews__prev', 'reviews__next']
	});

})();
