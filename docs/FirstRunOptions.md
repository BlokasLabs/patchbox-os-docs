# First Run Options

The first run of the Patchbox OS is super easy. Not only because it has the initial [setup wizard](SetupWizard.md) which helps you to set things up, but also it has the SSH and the VNC enabled by default, so [the remote control of the Raspberry Pi](RemoteControl.md) can be initiated with only one command. Choose the option which suits you best, follow the steps listed below and get it done!

**You may give the image a try even if you don't have <a href="https://blokas.io/pisound/" target="_blank">the Pisound</a> yet - the configuration tool allows for an easy configuration of the audio device. You may use built-in, USB or other audio cards.**

### Option 01: using a monitor and a keyboard

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Type in the username and password into the login screen

**Note:** The default user name is ‘**patch**’ and its password is '**blokaslabs**'

### Option 02: via an Ethernet connection or a local wireless network

1. Connect your computer to the same Network as Raspberry Pi (via an Ethernet cable or a Wi-Fi)
2. Open a terminal (command) window
3. Run `ssh patch@ip_address` (use [the IP address of your Raspberry Pi](FindTheIP.md))

**Note:** If you want to control your Raspberry Pi via VNC, while going through the setup wizard you will get asked about the `boot environment`. To initiate the graphical interface choose `dekstop` or just run `startx`

### Option 03: via default Wi-Fi hotspot (RPi Zero W and RPi3 (and newer) models only)

1. Connect to the Wi-Fi hotspot (it is enabled by default) named '**Patchbox**', password - '**blokaslabs**'
2. Open a terminal (command) window and run `ssh patch@172.24.1.1` to start a shell session (if you did connect to other Wi-Fi hotspot, figure out [the IP address of your Raspberry Pi](FindTheIP.md) and use `ssh patch@ip_address`)

**Note:** You will get asked if you want to connect to a Wi-Fi network during the initial setup wizard, once the connection is attempted, the `SSH` connection will drop. You may skip this step in order not to lose the connection.

## Comments

Have any questions or suggestions? Let us know!

## Community

Join our <a href = "https://community.blokas.io/" target="_blank">community</a> forum for more tips and support! 