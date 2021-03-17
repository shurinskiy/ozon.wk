import 'owl.carousel';

(() => {

	$('.scheme__items').owlCarousel({
		loop: false,
		items: 6,
		margin: 25,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['scheme__prev', 'scheme__next'],
		responsive: {
			0: {
				items: 2,
			},
			360: {
				items: 3,
			},
			480: {
				items: 4,
			},
			640: {
				items: 5,
			},
			780: {
				items: 6,
			}
		}
	});

})();
