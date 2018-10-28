# MMM-SoundMachine

Designed to imitate the soothing sounds of popular sound machines on the market.



## Installation

`git clone https://github.com/mykle1/MMM-SoundMachine` into the `~/MagicMirror/modules` directory.`

## Config.js entry and options

{
          disabled: f,
          module: 'MMM-SoundMachine',
          header: "",
          position: 'bottom_right',
          config: {
                sounds: '1',                     // See list at bottom of README
            		maxWidth: "300px",               // If you use a header this would help
          }
      },

## Default sounds

* driving
* furnace
* people
* people2
* rain
* rain2
* rain3
* seashore
* washroom

## Add your own sounds.

* Use .wav files. MP3's do NOT make good seamless loops
* The beginning and end of the sound file should sound alike
* Put the sound files in the MagicMirror/modules/MMM-SoundMachine/sounds folder
* Put only the name (not the extension) in the config


