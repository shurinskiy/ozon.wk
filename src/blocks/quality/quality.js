import 'owl.carousel';

(() => {
	$('.quality__items').owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['quality__prev', 'quality__next'],
		responsive: {
			960: { items: 4 },
			780: { items: 3 },
			480: { items: 2 },
			0: { items: 1 }
		}
	});

})();
