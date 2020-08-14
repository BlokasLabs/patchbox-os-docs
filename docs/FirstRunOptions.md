# First Run Options

The first run of the Patchbox OS is super easy. Not only because it has the initial [setup wizard](SetupWizard.md) which helps you to set things up, but also it has SSH and VNC enabled by default, so [the remote control of the Raspberry Pi](RemoteControl.md) can be initiated with only one command. Choose the option which suits you best, follow the steps listed below and get it done!

**You may give the image a try even if you don't have a <a href="https://blokas.io/pisound/" target="_blank">Pisound</a> yet - the configuration tool allows for an easy configuration of the audio device. You may use built-in, USB or other audio cards.**

## Option 01: using a monitor and a keyboard

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Type in the username and password into the login screen

**Note:** The default user name is ‘**patch**’ and its password is '**blokaslabs**'

## Option 02: via an Ethernet connection or a local wireless network

1. Connect your computer to the same Network as Raspberry Pi (via an Ethernet cable or a Wi-Fi)
2. Open a terminal (command) window
3. Run `ssh patch@ip_address` (use [the IP address of your Raspberry Pi](FindTheIP.md))

**Note:** While going through the setup wizard you will get asked about the `boot environment`. If you want to control your Raspberry Pi via VNC, you may want to choose one of the `desktop` or `desktop autologin` options. This way Patchbox OS will initiate the graphical interface automatically on system startup. Otherwise, you will have to initiate it manually by running the `startx` command, either while connected via SSH or using a keyboard connected directly to the Raspberry Pi.

## Option 03: via default Wi-Fi hotspot*

__*__ Raspberry Pi Zero W and Raspberry Pi 3 (and newer) models only.

1. Connect to the Wi-Fi hotspot (it is enabled by default) named '**Patchbox**', password - '**blokaslabs**'
2. Open a terminal (command) window and run `ssh patch@172.24.1.1` to start a shell session (if you did connect to other Wi-Fi hotspot, figure out [the IP address of your Raspberry Pi](FindTheIP.md) and use `ssh patch@ip_address`)

**Note:** You will get asked if you want to connect to a Wi-Fi network during the initial setup wizard, once the connection is attempted, the SSH connection will drop. You may skip this step in order not to lose the connection.

