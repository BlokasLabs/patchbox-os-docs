# First run

There are few options to initiate the first run of our recommended Patchbox OS image. These steps will introduce you to these options and will provide some tips for the initial setup wizard.

You may give the image a try even if you don’t have a Pisound yet. The configuration tool allows you to choose the device you want to use - built-in, USB or any other audio card. 

**Note:** The default user name is ‘**patch**’ and its password is '**blokaslabs**'. The WiFi hotspot’s (called ‘**Patchbox**’, enabled by default) password is also ‘**blokaslabs**’.

## 1. First run options

**Option 01:** using a monitor and a keyboard

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Type in the username and password into the login screen

**Note:** The default user name is ‘**patch**’ and its password is '**blokaslabs**'


**Option 02:** via an Ethernet connection or local wireless network

1. Connect your computer to the same Network as Raspberry Pi (via an Ethernet cable or the Wi-Fi)
2. Open a terminal (command) window
3. Run `ssh patch@ip_address` (Change the IP_ADDRESS to the IP address of your Raspberry Pi)


**Option 03:** via default WiFi hotspot (RPi Zero W and RPi3 (and newer) models only)

1. Connect to the Wi-Fi hotspot (it is enabled by default) named '**Patchbox**', password - '**blokaslabs**'
2. Open a terminal (command) window and run `ssh patch@172.24.1.1`* to start a shell session

*If you did connect to other Wi-Fi hotspot, figure out the IP address and use `ssh patch@ip_address`

**Note:** You will get asked if you want to connect to a WiFi network during the initial setup wizard, once the connection is attempted, the ssh connection will drop. You may skip this step in order not to lose the connection.

## 2. Initial setup wizard

The very first time you login to the PatchboxOS, the setup wizard will run to help set things up. 
You will be asked to change your password, set the audio card up, the target boot environment and WiFi connection.

A few tips which can be useful while going through the setup wizard:

- While going through the setup wizard you will be asked to choose the audio card you want to use. If you want to use Pisound, attach it to your Raspberry Pi before plugging it in. 
- PatchboxOS username - `**patch**`; password - `**blokaslabs**`
- If you want to go throught the setup wizard again, run `patchbox wizard`
- If you chose to connect to your Raspberry Pi via `SSH`, you will get asked if you want to connect to a WiFi network during the initial setup wizard, once the connection is attempted, the `ssh` connection will drop. You may skip this step in order not to lose the connection. If you did connect to other WiFi hotspot, figure out the IP and use that to ssh as described in above method.
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


**Note:** Feel free to experiment with the Jack settings, like lowering the values for lower latency, the configuration tool makes a quick check of attempting to start the Jack backend, and if it fails to start, asks you to input new settings. If the server starts, but you are not getting any audio from audio software, see the [Troubleshooting](Troubleshooting.md) section.

## Comments

Have any questions or suggestions? Let us know!

## Community

Join our <a href = "https://community.blokas.io/" target="_blank">community</a> forum for more tips and support! 