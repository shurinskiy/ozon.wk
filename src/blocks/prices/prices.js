(() => {

	$('.prices').on('click', '.prices__button:not(.active)', function(e) {
		e.preventDefault();
		var $self = $(this);
	
		$self.addClass('active').siblings().removeClass('active');
		$self.parents('.prices').find('.prices__row').removeClass('active').eq($self.index()).addClass('active');
	});

})();
