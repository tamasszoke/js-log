
/*
	jsLog - Console logging library
	Created by Tamas Szoke
	
	The MIT License (MIT)
	Copyright (c) 2016 Tamas Szoke
	https://opensource.org/licenses/MIT

	Usage

	// create an instance, set default color, default background, time if not need
	
	var jsl = new js_log({
		color: '#00ff00',
		background: 'rgb(100, 100, 50)',
		time: false
	});
	
	// write to console, accepts hex, rgb colors
	jsl.log('some text', 'text color', 'background color');

	jsl.color('color'); // set font color (default: black)
	jsl.background('color'); // set background color (default: none)
	jsl.time_on(); // logging with time (default)
	jsl.time_off(); // logging without time
	jsl.on(); // enable logging (default)
	jsl.off(); // disable logging
*/

function js_log(defaults) {

	var root = this;
	var config = {};
	
	config.on = true;
	config.time = true;

	if (defaults.time === true || defaults.time === false) {

		config.time = defaults.time;
	};

	config.color = defaults.color;
	config.background = defaults.background;

	root.log = function(message, color, background) {

		if (config.on) {

			if (!color) color = config.color;
			if (!background) background = config.background;

			if (config.time) {

				var d = new Date();
				var hours = d.getHours();
				var minutes = d.getMinutes();
				var seconds = d.getSeconds();

				if (hours < 10) hours = '0' + hours;
				if (minutes < 10) minutes = '0' + minutes;
				if (seconds < 10) seconds = '0' + seconds;

				var time = hours + ':' + minutes + ':' + seconds;

				console.log('%c ' + time  + ' - ' + message + ' ', 'background: ' + background + '; color: ' + color);
			
			} else {

				console.log('%c ' + message + ' ', 'background: ' + background + '; color: ' + color);
			};
		};
	};

	root.color = function(color) {

		config.color = color;
	};

	root.background = function(background) {

		config.background = background;
	};

	root.time_on = function() {

		config.time = true;
	};

	root.time_off = function() {

		config.time = false;
	};

	root.on = function() {

		config.on = true;
	};

	root.off = function() {

		config.on = false;
	};
};
