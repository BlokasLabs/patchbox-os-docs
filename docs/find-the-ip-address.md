# Find the IP Address of the Raspberry Pi

Knowing the IP address of the Raspberry Pi is important if you want to connect to it from another device in order to control it remotely. There are a few different ways to find it. Follow the steps listed below and get it done!

Your Raspberry Pi may have a different IP address depending on whether it’s connected to Wi-Fi or via Ethernet. The IP address might even change from time to time, so if you ever find yourself unable to connect, make sure the IP address you are using is correct!

**Important: make sure your Raspberry Pi is connected to your local network using an Ethernet cable or Wi-Fi.**

## Option 01: Using the Pisound App (Android)

**Note:** This option is only suitable if you are using a <a href="https://blokas.io/pisound/" target="_blank">Pisound</a> - an ultra-low latency high-quality sound card and MIDI interface specially designed for Raspberry Pi pocket computers. 

1. Download <a href="https://play.google.com/store/apps/details?id=com.blokas.pisoundctl" target="_blank">the Pisound App</a> 
2. Attach your Pisound to your Raspberry Pi and power it on 
3. Turn the discoverabilty on by holding The Pisound's Button down for 1 second (<a href="https://blokas.io/pisound/docs/pisound-app/#connecting-to-the-raspberry-pi" target="_blank">how to connect to your Raspberry Pi using the Pisound App</a>)
4. Launch the Pisound App on your device and connect to your Pisound via Bluetooth
5. Visit the Home tab, the IP address will be displayed below the Pisound’s serial number

## Option 02: Using a Monitor and a Keyboard

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Open a terminal (command) window and run `ifconfig`
4. In the output you will see the `inet addr` line displaying the IP (e.g. 192.168.1.10)

## Option 03: Using the Fing app (Android or iOS)

1. Connect your tablet/smartphone to the same Network as Raspberry Pi
2. Download the Fing app: <a href="https://play.google.com/store/apps/details?id=com.overlook.android.fing" target="_blank">Android</a> or <a href="https://itunes.apple.com/gb/app/fing-network-scanner/id430921107?mt=8" target="_blank">iOS</a>
3. Press “**Scan for devices**” on the top of the screen (right under the name of your Wi-Fi hotspot)
4. Scroll down to the entry with the hostname of your Raspberry Pi. The IP address is displayed bellow the hostname

## Option 03: Using Your Computer & ping Command

1. Connect your computer to the same Network as Raspberry Pi
2. Open a terminal (command) window and run  `ping your_hostname.local` (see below notes)
    1. Replace `your_hostname.local` with `patchbox.local` or `raspberry.local`.
    1. If you've changed the system's hostname, use it with `.local` appended.
3. If the Raspberry Pi is reachable, ping will show its IP address, e.g:

    `PING your_hostname.local (192.168.1.33): 56 data bytes`

    `64 bytes from 192.168.1.33: icmp_seq=0 ttl=255 time=2.618 ms`

**Note:** On Windows PC, mDNS driver is required for .local addresses to work, you may install <a href="https://support.apple.com/kb/DL999?locale=en_US" target="_blank">this driver</a>.

## Option 04: using your computer & Angry IP Scanner

1. Download and install <a href="http://angryip.org/" target="_blank">Angry IP Scanner</a> 
2. Connect your computer to the same Network as Raspberry Pi
3. Launch Angry IP Scanner and press **Start** button
4. Scroll down to the entry with your Raspberry Pi’s hostname. The IP address is in the column on the left

