import 'owl.carousel';

(() => {

	$('.insta__reviews').owlCarousel({
		loop: true,
		items: 4,
		margin: 50,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['insta__prev', 'insta__next']
	});

})();
