import 'owl.carousel';

(() => {

	$('.license__items').owlCarousel({
		loop: true,
		items: 3,
		margin: 25,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['license__prev', 'license__next'],
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			640: {
				items: 3,
			}
		}
	});

})();
