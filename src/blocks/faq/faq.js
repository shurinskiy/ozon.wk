(() => {

	$('.faq__items').on('click', '.faq__item-title', function(e) {
		e.preventDefault();

		let $self = $(this);
		let $block = $self.next('.faq__item-text');
		
		$('.faq__items')
			.find('.faq__item-text:visible')
			.not($block)
			.slideUp(400)
			.prev('.faq__item-title')
			.removeClass('opened');
			
		$block
			.slideToggle(400)
			.prev('.faq__item-title')
			.toggleClass('opened');
	});

})();
