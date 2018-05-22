$(function() {
	$('#index').css({'display': 'none'});
	$('#menu').css({'display': 'none'});
	$('#portfolio').css({'display': 'none'});
	$('#aboutme').css({'display': 'none'});
	$('#skills').css({'display': 'none'});
	$('#contact_me').css({'display': 'none'});
	$('#index').css({'display': 'inline-block'});

	function getInputValue() {
		for (var i = 1; i < 7; i++) {
			if ($('#' + i).val().length > 1) {
				return $('#' + i).val();
			}
		}
	}

	if ($('#contact_me').css('display') == 'inline-block') {
		$('body').click(() => $('.cmd-input').focus());
	}

	if ($('.cmd-input').keypress(function(e) {
		if (e.which === 13) {
			// Index page
			if (getInputValue() == 'cd ~' || 
				getInputValue() == 'cd /' || 
				getInputValue() == 'cd /root' ||
				getInputValue() == 'cd ..') {

				$('#menu').css({'display': 'none'});
				$('#portfolio').css({'display': 'none'});
				$('#aboutme').css({'display': 'none'});
				$('#skills').css({'display': 'none'});
				$('#contact_me').css({'display': 'none'});

				$('.cmd-input').val('');
				$('.cmd-input').focus();
				$('#index').css({'display': 'inline-block'});
			}

			// Menu 
			if (getInputValue() == 'cd menu') {
				$('#index').css({'display': 'none'});
				$('#portfolio').css({'display': 'none'});
				$('#aboutme').css({'display': 'none'});
				$('#skills').css({'display': 'none'});
				$('#contact_me').css({'display': 'none'});

				$('.cmd-input').val('');
				$('.cmd-input').focus();
				$('#menu').css({'display': 'inline-block'});
			}

			// Portfolio
			else if (getInputValue() == 'cd portfolio') {
				$('#index').css({'display': 'none'});
				$('#menu').css({'display': 'none'});
				$('#aboutme').css({'display': 'none'});
				$('#skills').css({'display': 'none'});
				$('#contact_me').css({'display': 'none'});

				$('.cmd-input').val('');
				$('.cmd-input').focus();
				$('#portfolio').css({'display': 'inline-block'});
			}

			// About me
			else if (getInputValue() == 'cd about_me') {
				$('#index').css({'display': 'none'});
				$('#menu').css({'display': 'none'});
				$('#portfolio').css({'display': 'none'});
				$('#skills').css({'display': 'none'});
				$('#contact_me').css({'display': 'none'});

				$('.cmd-input').val('');
				$('.cmd-input').focus();
				$('#aboutme').css({'display': 'inline-block'});
			}

			// Skills
			else if (getInputValue() == 'cd skills') {
				$('#index').css({'display': 'none'});
				$('#menu').css({'display': 'none'});
				$('#portfolio').css({'display': 'none'});
				$('#aboutme').css({'display': 'none'});
				$('#contact_me').css({'display': 'none'});

				$('.cmd-input').val('');
				$('.cmd-input').focus();
				$('#skills').css({'display': 'inline-block'});
			}

			// Contact me
			else if (getInputValue() == 'cd contact_me') {
				$('#index').css({'display': 'none'});
				$('#menu').css({'display': 'none'});
				$('#portfolio').css({'display': 'none'});
				$('#aboutme').css({'display': 'none'});
				$('#skills').css({'display': 'none'});

				$('.cmd-input').val('');
				$('#contact_me').css({'display': 'inline-block'});
			}
		}
	}));
});