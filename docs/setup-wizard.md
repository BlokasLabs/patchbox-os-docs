# Setup Wizard

The very first time you login to the Patchbox OS, the setup wizard is ready to help you to set things up. Starting with a system update and finishing with the instalation of a chosen [module](modules.md) - the Patchbox OS will be ready in no time. Follow the steps listed below and get it done!

**Note:** If you want to use the Pisound as the audio card, attach it to your Raspberry Pi before powering it on.

A few tips which can be useful while going through the setup wizard:

- The Patchbox OS username - `patch`; password - `blokaslabs`
- If you want to go through the setup wizard again after it is done, run `patchbox wizard`
- The built-in sound card of the Raspberry Pi is ALSA (bcm2835_alsa). If connected correctly, Pisound (or any other sound card) should be listed when asked to pick the default sound card. If not, make sure you connected it correctly or try to restart the Raspberry Pi
- Recommended Jack settings:

|                    | Pisound | Built-in BCM audio jack (bcm2835_alsa)* | USB audio card** |
| ------------------ | ------- | --------------------------------------- | ---------------- |
| Sampling rate (-r) |  48000  |                 44100                   |      44100       |
| Buffer size (-p)   |   128   |                  512                    |       512        |
| Period (-n)        |    2    |                   3                     |        3         |

__*__ The Raspberry Pi’s built-in jack produces audio using PWM and has output resolution of 11 bits.

__**__ USB audio cards do not seem to work well with Pianoteq.

**Note:** Feel free to experiment with the Jack settings, like lowering the values for lower latency, the configuration tool makes a quick check of attempting to start the Jack backend, and if it fails to start, asks you to input new settings. If the server starts, but you are not getting any audio from audio software, see the [Troubleshooting](https://blokas.io/patchbox-os/docs/troubleshooting/) section.

- You will get to decide which boot environment you want to use (dekstop or console). If you want to control your Raspberry Pi via VNC, choose `desktop`. This will initiate the graphical environment (it can be done after the setup wizard by running `startx`). For remote control via VNC we recommend to use <a href="https://www.realvnc.com/en/connect/download/viewer/" target="_blank">the RealVNC Viewer</a> ([more about remote control via VNC](remote-control.md))
- During the initial setup wizard you will get asked if you want to connect to a Wi-Fi network. Once the Wi-Fi connection is attempted, the SSH connection will drop. You may skip this step in order not to lose the connection
- The last step of the setup wizard is activating a [module](modules.md)
- All the settings can be changed later by running `patchbox` and choosing the parameter you want to change

