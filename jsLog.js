
/*
	jsLog - Console logging library
	Created by Tamas Szoke
	https://tamasszoke.github.io/jsLog
	
	The MIT License (MIT)
	Copyright (c) 2016 Tamas Szoke
	https://opensource.org/licenses/MIT
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
