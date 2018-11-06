/* Magic Mirror
 * Module: MMM-SoundMachine
 *
 * By Mykle1
 * MIT Licensed.
 */

Module.register('MMM-SoundMachine', {
	// Default module config.
			defaults: {
				  sounds: 'Rain&Waves',
					statement: 'SoundMachine',
					animationSpeed: 3000,
					updateInterval: 15000,
		},

	    start: function () {
        Log.info("Starting module: " + this.name);
				self = this;

			// ADDED: Schedule update timer
	     setInterval(function() {
	     self.updateDom(self.config.animationSpeed || 0); // use config.animationSpeed or revert to zero @ninjabreadman
	     }, this.config.updateInterval);

	 	},

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


		       // create audio, paused upon loading
			 if (this.config.sounds != "") {
					var sound = new Audio();
					sound.src = 'modules/MMM-SoundMachine/sounds/' + this.config.sounds + '.mp3';
					sound.loop = true;
					sound.pause();
			  }

         // play button
				 var button2 = document.createElement('button');
				 button2.innerHTML = "<img src='modules/MMM-SoundMachine/icons/play3.png' height='50' width='50'>";
//	 		 button2.innerHTML = '<button class="button">Play</button>';
				 button2.className = ('button');
				 button2.addEventListener("click", () =>  sound.play());
				 wrapper.appendChild(button2);

         // pause button
				 var button = document.createElement('button');
				 button.innerHTML = "<img src='modules/MMM-SoundMachine/icons/pause3.png' height='50' width='50'>";
//			 button.innerHTML = '<button class="button">Pause</button>';
			   button.className = ('button');
				 button.addEventListener("click", () =>  sound.pause());
				 wrapper.appendChild(button);


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
