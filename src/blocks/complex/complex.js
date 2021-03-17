import 'owl.carousel';

(() => {

	$('.complex__items').owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['complex__prev', 'complex__next'],
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},
			960: {
				items: 3,
			}
		}
	});


	$('.complex').on('click', '.complex__button:not(.active)', function(e) {
		e.preventDefault();
		var $self = $(this);
	
		$self
			.addClass('active')
			.siblings()
			.removeClass('active');

		$self
			.parents('.complex')
			.find('.complex__items')
			.removeClass('active')
			.eq($self.index())
			.addClass('active');
	});


})();
