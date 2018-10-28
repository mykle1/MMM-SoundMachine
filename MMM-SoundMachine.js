/* Magic Mirror
 * Module: MMM-SoundMachine
 *
 * By Mykle1
 * MIT Licensed.
 */

Module.register("MMM-SoundMachine", {
	// Default module config.
	defaults: {
		sounds: 'rain',                     // 1-52
		maxWidth: "100%",               // Adjusts size of images. Retains aspect ratio.
//		updateInterval: 5 * 60 * 1000,  // set in config.js
//    animationSpeed: 3000,
	},

	start: function () {
		self = this;
		this.url = '';

	},

	getStyles: function () {
		return ["MMM-SoundMachine.css"]
	},

	// Override dom generator.
	getDom: function () {

		    var wrapper = document.createElement("div");

        var sleep = document.createElement("p");
				sleep.classList.add("small", "bright", "sleep");
				sleep.innerHTML = "Relaxing sounds playing";
				wrapper.appendChild(sleep);


		if (this.config.sounds != "") {
			var sound = new Audio();
			sound.src = 'modules/MMM-SoundMachine/sounds/' + this.config.sounds + '.wav';
			sound.loop = true;
			sound.play();
	}

		return wrapper;
	},


	/////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_SOUNDMACHINE') {
            this.hide();
        }  else if (notification === 'SHOW_SOUNDMACHINE') {
            this.show(1000);
        }

    },

});
