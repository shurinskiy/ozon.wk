(() => {

	$('.prices__row').owlCarousel({
		loop: true,
		items: 3,
		margin: 20,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['prices__prev', 'prices__next'],
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


	$('.prices').on('click', '.prices__button:not(.active)', function(e) {
		e.preventDefault();
		var $self = $(this);
	
		$self
			.addClass('active')
			.siblings()
			.removeClass('active');

		$self
			.parents('.prices')
			.find('.prices__row')
			.removeClass('active')
			.eq($self.index())
			.addClass('active');
	});



})();
