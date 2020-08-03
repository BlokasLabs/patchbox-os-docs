# First run options

There are few options to initiate the first run of our recommended Patchbox OS image. These steps will introduce you to these options and will provide some tips for the initial setup wizard.

You may give the image a try even if you don’t have a Pisound yet. The configuration tool allows you to choose the device you want to use - built-in, USB or any other audio card. 

**Note:** The default user name is ‘**patch**’ and its password is '**blokaslabs**'. The WiFi hotspot’s (called ‘**Patchbox**’, enabled by default) password is also ‘**blokaslabs**’.

### Option 01: using a monitor and a keyboard

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Type in the username and password into the login screen

**Note:** The default user name is ‘**patch**’ and its password is '**blokaslabs**'


### Option 02: via an Ethernet connection or local wireless network

1. Connect your computer to the same Network as Raspberry Pi (via an Ethernet cable or the Wi-Fi)
2. Open a terminal (command) window
3. Run `ssh patch@ip_address` (Change the `ip_address` to the IP address of your Raspberry Pi)


### Option 03: via default WiFi hotspot (RPi Zero W and RPi3 (and newer) models only)

1. Connect to the Wi-Fi hotspot (it is enabled by default) named '**Patchbox**', password - '**blokaslabs**'
2. Open a terminal (command) window and run `ssh patch@172.24.1.1`* to start a shell session

*If you did connect to other Wi-Fi hotspot, figure out the IP address and use `ssh patch@ip_address`

**Note:** You will get asked if you want to connect to a WiFi network during the initial setup wizard, once the connection is attempted, the ssh connection will drop. You may skip this step in order not to lose the connection.

## Comments

Have any questions or suggestions? Let us know!

## Community

Join our <a href = "https://community.blokas.io/" target="_blank">community</a> forum for more tips and support! 