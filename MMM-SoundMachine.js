/* Magic Mirror
 * Module: MMM-SoundMachine
 *
 * By Mykle1
 * MIT Licensed.
 */

Module.register("MMM-SoundMachine", {
	// Default module config.
			defaults: {
				  sounds: 'Rain&Waves',
					statement: "SoundMachine",
		},

//	start: function () {
//		self = this;
//		this.url = '';

//	},

        getStyles: function () {
		    return ["MMM-SoundMachine.css"]
	  },

	     // Override dom generator.
	     getDom: function () {

			    var wrapper = document.createElement("div");

	        var sleep = document.createElement("div");
					sleep.classList.add("small", "bright", "sleep");
					sleep.innerHTML = this.config.statement;
					wrapper.appendChild(sleep);


		    // this works but there is a gap when looping. Not seamless. :(
				if (this.config.sounds != "") {
					var sound = new Audio();
					sound.src = 'modules/MMM-SoundMachine/sounds/' + this.config.sounds + '.mp3';
					sound.loop = true;
					sound.play();
			  }

	       //////// Add buttons to pause and play sounds ///////////////

					var button = document.createElement('button');
					button.innerHTML = "<img src='modules/MMM-SoundMachine/icons/pause3.png' height='50' width='50'>";
		//			button.innerHTML = '<button class="button">Pause</button>';
			    button.className = ('button');
					button.addEventListener("click", () =>  sound.pause());
					wrapper.appendChild(button);

					var button2 = document.createElement('button');
					button2.innerHTML = "<img src='modules/MMM-SoundMachine/icons/play3.png' height='50' width='50'>";
		//			button2.innerHTML = '<button class="button">Play</button>';
			    button2.className = ('button');
					button2.addEventListener("click", () =>  sound.play());
					wrapper.appendChild(button2);

		return wrapper;
	},

	/////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_SOUNDMACHINE') {
            this.hide(500);
        }  else if (notification === 'SHOW_SOUNDMACHINE') {
            this.show(1000);
        }
    },

});
