import 'owl.carousel';

(() => {

	$('.reviews__items').owlCarousel({
		loop: true,
		items: 4,
		margin: 50,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['reviews__prev', 'reviews__next'],
		responsive: {
			0: {
				items: 1,
			},
			640: {
				items: 2,
			},
			780: {
				items: 3,
			},
			960: {
				items: 4,
			}
		}
	});

})();
