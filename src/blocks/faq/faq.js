(() => {

	$('.faq__items').on('click', '.faq__item-title', function(e) {
		e.preventDefault();

		let $self = $(this);
		let $block = $self.next('.faq__item-text');
		
		$('.faq__items')
			.find('.faq__item-text:visible')
			.not($block)
			.removeClass('opened')
			.slideUp(400);
		
		$block
			.toggleClass('opened')
			.slideToggle(400); // если slideDown(), то один все время открыт
	});

})();
