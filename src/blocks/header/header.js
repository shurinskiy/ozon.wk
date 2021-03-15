(() => {
	$menu = $('.header__menu');

	$('.header__menu-open, .header__menu-close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$menu.toggleClass('opened');
	});

	$(window).on('click', function(e) {
		if($menu.hasClass('opened') && !e.target.closest('.header__menu')) {
			e.preventDefault();
			$menu.toggleClass('opened');
		}
	});

})();
