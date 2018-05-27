$(function() {
	const pages = ['#index', '#menu', '#portfolio', '#aboutme', '#skills', '#contact_me'];
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

			// Menu 
			if (getInputValue() == 'cd menu') {
				resetInput(pages[1]);
			}

			// Portfolio
			else if (getInputValue() == 'cd portfolio') {
				resetInput(pages[2]);
			}

			// About me
			else if (getInputValue() == 'cd about_me') {
				resetInput(pages[3]);
			}

			// Skills
			else if (getInputValue() == 'cd skills') {
				resetInput(pages[4]);
			}

			// Contact me
			else if (getInputValue() == 'cd contact_me') {
				resetInput(pages[5]);
			}
		}
	}));
});