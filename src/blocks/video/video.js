import 'owl.carousel';

(() => {

	$('.video__items').owlCarousel({
		loop: true,
		items: 3,
		video:true,
		margin: 17,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['video__prev', 'video__next'],
		responsive: {
			0: {
				items: 1,
			},
			640: {
				items: 2,
			},
			960: {
				items: 3,
			}
		}
	});

	// Загрузка видео с youtube
	$('.video__items').on('click', '.video__play', function(e) {
		let $self = $(this);

		$self
			.parents('.video__items')
			.find('.video__frame')
			.attr('src', '')
			.next('.video__play')
			.show();

		$self
			.prev('.video__frame')
			.attr('src', $self.data('youtubeSrc'))
			.end()
			.fadeOut();
	});

})();
