$(function() {
	const PAGE_KEY = {
		'#index': {cmd: 'cd index'},
		'#menu': {cmd: 'cd menu'},
		'#portfolio': {cmd: 'cd portfolio'},
		'#aboutme': {cmd: 'cd about_me'},
		'#skills': {cmd: 'cd skills'},
		'#contact_me': {cmd: 'cd contact_me'}
	};

	Object.keys(PAGE_KEY).forEach(key => $(key).css({'display': 'none'}));
	$('#index').css({'display': 'inline-block'});

	function switchPage(cmd) {
	 Object.keys(PAGE_KEY).forEach(key => {if (cmd == PAGE_KEY[key].cmd) changePage(key)});
	}

	function changePage(selector) {
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

			// Magic! Only a magician knows what is going on here o.O??
			switchPage(getInputValue());
		}
	}));
});