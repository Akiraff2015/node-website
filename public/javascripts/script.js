$(function() {
	const pages = ['#index', '#menu', '#portfolio', '#aboutme', '#skills', '#contact_me'];
	
	const page_key = {
		'#menu': {cmd: 'cd menu'},
		'#portfolio': {cmd: 'cd portfolio'},
		'#aboutme': {cmd: 'cd about_me'},
		'#skills': {cmd: 'cd skills'},
		'#contact_me': {cmd: 'cd contact_me'}
	};


	function switchPage(cmd) {
	 Object.keys(page_key).forEach(function(key, i, arr) {
	 	if (cmd == page_key[key].cmd) resetInput(key);
	 });
	}

	pages.forEach(val => $(val).css({'display': 'none'}));
	$('#index').css({'display': 'inline-block'});

	function resetInput(selector) {
		pages.forEach(val => $(val).css({'display': 'none'}));
		$('.cmd-input').val('');
		$(selector).css({'display':'inline-block'});
	}

	function getInputValue() {
		for (var i = 1; i < 7; i++) {
			if ($('#' + i).val().length > 1) {
				return $('#' + i).val();
			}
		}
	}


	if ($('.cmd-input').keypress(function(e) {
		if (e.which === 13) {
			// Index page
			if (getInputValue() == 'cd ~' || 
				getInputValue() == 'cd /' || 
				getInputValue() == 'cd /root' ||
				getInputValue() == 'cd ..') {

				$('.cmd-input').val('');
				$('#index').css({'display': 'inline-block'});
			}
			switchPage(getInputValue());
		}
	}));
});