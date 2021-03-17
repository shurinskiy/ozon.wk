import 'owl.carousel';

(() => {

	$('.insta__items').owlCarousel({
		loop: true,
		margin: 12,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['insta__prev', 'insta__next'],
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			640: {
				items: 3,
			},
			960: {
				items: 4,
			}
		}
	});

})();
