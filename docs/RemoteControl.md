# Remote Control Options for the Raspberry Pi

If you do not have a spare monitor and a keyboard or just want to try something new - there are two different ways to remotely control your Raspberry Pi: via SSH (Secure Shell) or via VNC (Virtual Network Computing). Follow the steps listed below and get it done!

## SSH (Secure Shell)

### STEP 01: Enable SSH

**Option 01: using your computer**

1. Insert the SD card to your computer's SD card reader
2. Navigate to the boot partition of the SD card (boot partition is the smaller one)
3. Create a blank file named `ssh` without any extension
4. Safely remove the SD card and insert it into your Raspberry Pi
5. When the Raspberry Pi boots, it looks for the `ssh` file and if it is found, SSH is enabled and the file is deleted

**Option 02: using a monitor and a keyboard**

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Enter `sudo raspi-config` in a terminal (command) window
4. Select `Interfacing Options` and navigate to `SSH`
5. Choose `Yes`, `Ok` and `Finish`

### STEP 02: Connect to Raspberry Pi using SSH

**Note:** Make sure your Raspberry Pi is connected to your local network using an Ethernet cable or a Wi-Fi and you know the IP address of your Raspberry Pi!
  
**Option 01: using Linux or macOS computer**

1. Connect your computer to the same Network as your Raspberry Pi
2. Open a terminal (command) window and run `ssh username@ip_address` ([find the IP address of your Raspberry Pi](FindTheIP.md))


**Option 02: using Windows computer**

1. Download and install <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">PuTTY</a>
2. Connect your computer to the same Network as Raspberry Pi
3. Launch PuTTY client
4. Enter the IP address and click **Open**


**Option 03: using Android or iOS device**

1. Download <a href="http://www.termius.com/" target="_blank">the Termius App</a> 
2. Connect your device to the same Network as your Raspberry Pi
3. Open the Termius App
4. Enter an alias of your choosing
5. Enter the IP address under the hostname
6. Complete the username and password fields and hit **Save**

## VNC (Virtual Network Computing)

### STEP 01: Connect to a shell on the Raspberry Pi

**Option 01: remotely via SSH**

1. Connect your computer to the same Network as your Raspberry Pi
2. Open a terminal (command) window and run `ssh username@ip_address` ([find the IP address of your Raspberry Pi](FindTheIP.md))

**Option 02: using a monitor and a keyboard**

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Open a terminal (command) window


### STEP 02: Install & enable VNC 

1. In terminal (command) window run `sudo raspi-config`
2. Select `Interfacing Options` and navigate to `VNC`
3. Choose `Yes`, `Ok` and `Finish`


### STEP 03: Connect to your Raspberry Pi using VNC

1. Make sure your Raspberry Pi is connected to your local network using an Ethernet cable or a Wi-Fi
2. Download the <a href="https://www.realvnc.com/en/connect/download/viewer/" target="_blank">RealVNC Viewer</a>
3. Launch the RealVNC Viewer and enter [the IP address of your Raspberry Pi](FindTheIP.md)
4. When asked, enter the username and password


## Comments

Have any questions or suggestions? Let us know!

## Community

Join our <a href = "https://community.blokas.io/" target="_blank">community</a> forum for more tips and support! 