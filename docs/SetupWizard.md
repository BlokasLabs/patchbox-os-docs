# Initial setup wizard

The very first time you login to the PatchboxOS, the setup wizard will run to help set things up. 
You will be asked to change your password, set the audio card up, the target boot environment and WiFi connection.

A few tips which can be useful while going through the set up wizard:

- While going through the setup wizard you will be asked to choose the audio card you want to use. If you want to use Pisound, attach it to your Raspberry Pi before plugging it in
- Patchbox OS username - `patch`; password - `blokaslabs`
- If you want to go throught the setup wizard again, run `patchbox wizard`
- If you chose to connect to your Raspberry Pi via `SSH`, you will get asked if you want to connect to a WiFi network during the initial setup wizard, once the connection is attempted, the `ssh` connection will drop. You may skip this step in order not to lose the connection. If you did connect to other WiFi hotspot, figure out the IP and use that to ssh as described in above method
- Recommended Jack settings:

|                    | Pisound | Built-in BCM audio jack (bcm2835_alsa)* | USB audio card** |
| ------------------ | ------- | --------------------------------------- | ---------------- |
| Sampling rate (-r) |  48000  |                 44100                   |      44100       |
| Buffer size (-p)   |   128   |                  512                    |       512        |
| Period (-n)        |    2    |                   3                     |        3         |

*The Raspberry Pi’s built-in jack produces audio using PWM and has output resolution of 11 bits.

**USB audio cards do not seem to work well with Pianoteq.

- All the settings can be changed later by running `patchbox` and choosing the parameter you want to change
- The last step of the setup wizard is activating a [module](Modules.md). 


**Note:** feel free to experiment with the Jack settings, like lowering the values for lower latency, the configuration tool makes a quick check of attempting to start the Jack backend, and if it fails to start, asks you to input new settings. If the server starts, but you are not getting any audio from audio software, see the [Troubleshooting](https://blokas.io/patchbox-os/docs/Troubleshooting/) section.

## Comments

Have any questions or suggestions? Let us know!

## Community

Join our <a href = "https://community.blokas.io/" target="_blank">community</a> forum for more tips and support! 