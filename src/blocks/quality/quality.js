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
			1440: { items: 4 },
			640: { items: 4 },
			0: { items: 1 }
		}
	});

})();
