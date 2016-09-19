$(document).ready(start);

function start() {
	$('#submit-btn').click(updateImage);
}

function updateImage(e) {
	e.preventDefault();
	var cityValue = getCityValue();
}

function getCityValue() {
	var rawInput = $('#city-type').val();
	rawInput = rawInput.toLowerCase();
	rawInput = rawInput.trim();

	if(rawInput == 'new york' || rawInput == 'new york city' || rawInput == 'nyc') {
		updateNYC();
	} else if(rawInput == 'san francisco' || rawInput == 'sf' || rawInput == 'bay area') {
		updateSF();
	}
	else if(rawInput == 'Los Angeles' || rawInput == 'LA' || rawInput == 'LAX') {
		updateLA();
	}
	else if(rawInput == 'Austin' || rawInput == 'ATX') {
		updateATX();
	}
	else if(rawInput == 'Sydney' || rawInput == 'SYD') {
		updateSYD();
	}
	clearValueInput();
}


//

function updateNYC() {
	$('body').css('background','url(images/nyc.jpg)');
}

function updateSF() {
	$('body').css('background','url(images/sf.jpg)');
}

function updateLA() {
	$('body').css('background','url(images/la.jpg)');
}

function updateATX() {
	$('body').css('background','url(images/austin.jpg)');
}

function updateSYD() {
	$('body').css('background','url(images/sydney.jpg)');
}

function clearValueInput() {
	$('#city-type').val('');
}

