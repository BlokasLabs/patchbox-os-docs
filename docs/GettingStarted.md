# Getting Started

These steps may be perfect for those who have never used the Raspberry Pi before or want to go through basics once again. 

You can go try them even if your Pisound is still on it’s way!


## 1. Install operating system on the SD card

These step will help you install the OS image on the SD card for an easy OS transfer to your Raspberry Pi.  

### STEP 01: Install Etcher

**Windows**  

1. Download <a href = "https://etcher.io/" target="_blank">Etcher</a>
2. Double-click the *.exe file and follow the setup wizard
3. Run Etcher in the Administrator Mode: right-click on Etcher and choose ‘Run as administrator’

**MacOS** 

1. Download <a href = "https://etcher.io/" target="_blank">Etcher</a>
2. Drag the Etcher app to your Applications folder on a Mac and double-click to open it

<a href="https://community.blokas.io/t/raspberry-pi-write-sd-card-images-using-os-x-command-line/614" target='_blank'>Another way to do it with MacOS</a>


**Linux** 

1. Download <a href="https://etcher.io/" target="_blank">the AppImage file</a>
2. App images are self-contained runtimes that do not require manual installation or root. They will run on pretty much every distro out there
3. After the download is complete, double-click the image to run it

### STEP 02: Download OS image

1. Download a copy of the OS image you want to install (the PatchboxOS image can be downloaded <a href="https://blokas.io/patchbox-os/" target="_blank"> here</a>)
2. Unzip the file after it has downloaded

### STEP 03: Select the image

1. Attach your SD card to the computer
2. Launch Etcher
3. Click **flash from file** and select the file you want to upload
4. Click **select target** and choose your SD card
5. Now click **Flash!** to write the image file on the SD card
6. When done, remove the SD card, insert it into your Raspberry Pi and power it on.

**Note:** Etcher will format the SD card, before writing and verifying the image (this is shown by a progress bar). If you want to flash another SD card with the same image, insert it and click Use Same Image.


## 2. Find Raspberry Pi’s IP address

Every Raspberry Pi has its own IP address which is important to know if you want to connect to it from another device. There are few different ways to find it.

**Important:** make sure your Raspberry Pi is connected to your local network using an Ethernet cable or Wi-Fi.

**Option 01: using a monitor and a keyboard**

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Open a terminal (command) window and type `ifconfig`
4. In the output you will see the `inet addr` line displaying the IP, e.g. 192.168.1.10


**Option 02: using the Pisound app (Android)**

1. Download <a href="https://play.google.com/store/apps/details?id=com.blokas.pisoundctl" target="_blank">the Pisound app</a> 
2. Attach your Pisound to your Raspberry Pi and power it on 
2. Launch the Pisound app on your device and connect to a combo via Bluetooth
3. Visit the Home tab, the IP address will be displayed below the Pisound’s serial number


**Option 03: using the Fing app (Android or iOS)**

1. Connect your tablet/smartphone to the same Network as Raspberry Pi
2. Download the Fing app: <a href="https://play.google.com/store/apps/details?id=com.overlook.android.fing" target="_blank"> Android</a> or <a href="https://itunes.apple.com/gb/app/fing-network-scanner/id430921107?mt=8" target="_blank"> iOS</a>
3. Press “scan for devices” on the top of the screen (right under the name of your Wi-Fi hotspot)
4. Scroll down to the entry with the hostname of your Raspberry Pi. The IP address is desplayed bellow the hostname.


**Option 04: using your computer & ping command**

1. Connect your computer to the same Network as Raspberry Pi
2. Open a terminal (command) window 
3. Run the following command: `ping raspberry.local` * (On Windows PC, mDNS driver is required for .local addresses to work, you may install <a href="https://support.apple.com/kb/DL999?locale=en_US" target="_blank"> this driver</a>)
4. If the Raspberry Pi is reachable, ping will show its IP address, e.g:

    `PING raspberrypi.local (192.168.1.33): 56 data bytes`

    `64 bytes from 192.168.1.33: icmp_seq=0 ttl=255 time=2.618 ms`

*If you have changed the default hostname of your Raspberry Pi, type `ping YOUR_HOSTNAME.local` instead)

**Option 05: using your computer & Angry IP Scanner** 

1. Download and install the <a href="http://angryip.org/" target="_blank"> Angry IP Scanner</a> 
2. Connect your computer to the same Network as Raspberry Pi
3. Launch Angry IP Scanner and press **Start** button
4. Scroll down to the entry with your Raspberry Pi’s hostname. The IP address is in the column on the left

**Note:** Your Raspberry Pi may have a different IP address depending on whether it’s connected to WiFi or an Ethernet, and that address might even change from time to time. If you ever find yourself unable to connect, you can always double-check!

## 3. Remote control options for Raspberry Pi

If you do not have a spare monitor and a keyboard or just want to try something new - there is two different ways to remotely control your Raspberry Pi. 

### SSH (Secure Shell)

### STEP 01: Enable SSH

**Option 01: using your computer**

1. Connect the SD card to your computer
2. Navigate to the boot partition of the SD card (boot partition is the smaller one)
3. Create a blank file named `ssh` without any extension
4. When the Raspberry Pi boots, it looks for the `ssh` file and if it is found, SSH is enabled and the file is deleted


**Option 02: using a monitor and a keyboard**

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Enter `sudo raspi-config` in a terminal (command) window
4. Select `Interfacing Options` and navigate to `SSH`
5. Choose `Yes`, `Ok` and `Finish`

### STEP 02: Connect to Raspberry Pi using SSH

Make sure your Raspberry Pi is connected to your local network using an Ethernet cable or Wi-Fi and you know the IP address of your Raspberry Pi! 


**Option 01: using Linux or MacOS computer**

1. Connect your computer to the same Network as Raspberry Pi
2. Open a terminal (command) window and type `ssh USERNAME@IP_ADDRESS` (Change USERNAME with your username and for the IP_ADDRESS use the IP address from the previous step)


**Option 02: using Windows computer**

1. Download and install <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">PuTTY</a>
2. Connect your computer to the same Network as Raspberry Pi
3. Launch PuTTY client
4. Enter the IP address and click **Open**


**Option 03: using Android or iOS device**

1. Download <a href="http://www.termius.com/" target="_blank">the Termius App</a> 
2. Connect your device to the same Network as Raspberry Pi
3. Open the Termius App
4. Enter an alias of your choosing
5. Enter the IP address under hostname
6. Complete the username and password fields and hit **Save**



                    Rasbian username - pi; password - raspberry; 

                    PatchboxOS username - patch; password - blokaslabs;

                    MODEP username - modep; password - blokaslabs;



### VNC (Virtual Network Computing)

### STEP 01: Connect to a shell on the Raspberry Pi

**Option 01: remotely via SSH**

1. Connect your computer to the same Network as Raspberry Pi
2. Open a terminal (command) window and type `ssh USERNAME@IP_ADDRESS` (Change USERNAME with your username and for the IP_ADDRESS use the IP address of your Raspberry Pi)

**Option 02: using a monitor and a keyboard**

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Open a terminal (command) window

### STEP 02: Install & enable VNC

1. In terminal (command) window enter `sudo raspi-config`
2. Select `Interfacing Options` and navigate to `VNC`
3. Choose `Yes`, `Ok` and `Finish`

### STEP 03: Connect to your Raspberry Pi using VNC

1. Make sure your Raspberry Pi is connected to your local network using an Ethernet cable or Wi-Fi
2. Download the <a href="https://www.realvnc.com/en/connect/download/viewer/" target="_blank">RealVNC Viewer</a>
3. Launch the RealVNC Viewer and enter your Raspberry Pi’s IP address 
4. When asked, enter the username and password



                    Rasbian username - pi; password - raspberry; 

                    PatchboxOS username - patch; password - blokaslabs;

                    MODEP username - modep; password - blokaslabs;


## Comments

Have any questions or suggestions? Let us know!

## Community

Join our community forum for more tips and support! 
