import 'owl.carousel';

(() => {

	$('.examples__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: true,
		nav: true,
		navText: ['', ''],
		navClass: ['examples__prev', 'examples__next'],
		dotClass: 'examples__dot',
		onInitialized: makeThumb
	});

	function makeThumb(e) {
		let $items = $(e.target).find('.owl-item');
		let $dots = $(e.target).find('.examples__dot');
		// console.log($dots);

		$items.each(function(index) {
			$dots.eq(index).css({
				'background': `url(${$(this).find('img').attr('src')})`,
				'background-size': 'cover'
			})
		})
	}

	$('.examples').on('click', '.examples__button:not(.active)', function(e) {
		e.preventDefault();
		let $self = $(this);
	
		$self
			.addClass('active')
			.siblings()
			.removeClass('active');

		$self
			.parents('.examples')
			.find('.examples__slider')
			.removeClass('active')
			.eq($self.index())
			.addClass('active');
	});


})();
