import 'owl.carousel';

(() => {

	$('.workers__items').owlCarousel({
		loop: true,
		items: 4,
		margin: 25,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['workers__prev', 'workers__next'],
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
			1100: {
				items: 4,
			}
		}
	});

})();
