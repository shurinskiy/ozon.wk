(() => {
	
	$('input.js-range').each(function(index) {
		let $self = $(this);
		let min = $(this).attr('min') || 0;
		let max = $(this).attr('max') || 100;

		let getPercentage = (value) => {
			value = value || 0;
			return Math.floor((value - min)*100/(max-min))+'%';
		}

		$self
			.addClass('range__input')
			.wrap('<label class="range">')
			.parent('.range')
			.prepend('<span class="range__scale"></span><span class="range__handler"></span>');

		let $bar = $self.parent('.range');
		let $scale = $bar.find('.range__scale');
		let $handler = $bar.find('.range__handler');
		let $output = $('.range__output');
		let initial = getPercentage($self.val());

		$scale.css({width: initial});
		$handler.css({left: initial});
		$output.text($self.val());
		
		$self.on('change input', function(e) {
			let value = getPercentage(this.value);

			$scale.css({width: value});
			$handler.css({left: value});
			$output.text(this.value);
		});
	});


})();