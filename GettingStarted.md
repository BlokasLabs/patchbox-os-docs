# Getting Started

Please see our <a href="https://community.blokas.io/t/start-here-pisound-tutorials-index/623" target="_blank">Tutorial Index</a> for additional guides.


## Flashing the SD Card

Follow <a href="https://community.blokas.io/t/raspberry-pi-write-sd-card-images-using-etcher/594" target="_blank">this tutorial</a> in order to write the downloaded PatchboxOS image to an SD card.


## First Run

The default user name is ‘**patch**’ and its password is '**blokaslabs**'. The WiFi hotspot’s (called ‘**Patchbox**’, enabled by default) password is also ‘**blokaslabs**’.

You will be prompted to change the user password during the initial setup wizard. Changing or creating a new user is not recommended.

`ssh` is enabled by default. `vnc` is enabled by default as well, however `startx` has to be run first or 'desktop' boot environment selected in the configuration tool.

You may connect to the system using one of the following methods for the initial setup:

**Display and Keyboard**

Just type in the user and password into the login screen.

**Via Ethernet Connection or Local Wireless Network**

<a href="https://community.blokas.io/t/raspberry-pi-find-raspberry-pis-ip-address/596" target="_blank">Figure out the IP address</a>, run `ssh patch@ip_address` from your computer.

**Via Default WiFi Hotspot (RPi 3(+) and Zero Only)**

The WiFi hotspot is enabled by default, named '**Patchbox**', use '**blokaslabs**' password to connect to it. Once connected to the WiFi, use `ssh patch@172.24.1.1` to start a shell session (use '**blokaslabs**' for password). You will get asked if you want to connect to a WiFi network during the initial setup wizard, once the connection is attempted, the ssh connection will drop. You may skip this step in order not to lose the connection. If you did connect to WiFi, figure out the IP and use that to ssh as described in above method.


## Initial Setup Wizard

The very first time you login to PatchboxOS, the `sudo patchbox-config wizard` will run to help set things up. You will be asked to change your password, setup the audio card to be used, the target boot environment and WiFi connection.

Please see the below table for recommended Jack settings:

|                    | Pisound | Built-in BCM audio jack (bcm2835_alsa)* | USB audio card** |
| ------------------ | ------- | --------------------------------------- | ---------------- |
| Sampling rate (-r) | 48000   | 44100                                   | 44100            |
| Buffer size (-p)   | 128     | 512                                     | 512              |
| Period (-n)        | 2       | 3                                       | 3                |

\* The Raspberry Pi’s built-in jack produces audio using PWM and has output resolution of 11 bits.

\** USB audio cards do not seem to work well with Pianoteq.

Feel free to experiment with the Jack settings, like lowering the values for lower latency, the configuration tool makes a quick check of attempting to start the Jack backend, and if it fails to start, asks you to input new settings. If the server starts, but you are not getting any audio from audio software, see the [Troubleshooting](Troubleshooting.md) section.

## Guides

Check out the [Software Guides](SoftwareGuides.md) next for some quick start steps!

