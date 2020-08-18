# Remote Control Options for the Raspberry Pi

If you do not have a spare monitor and a keyboard or just want to try something new - there are two different ways to remotely control your Raspberry Pi: via SSH (Secure Shell) or via VNC (Virtual Network Computing). Follow the steps listed below and get it done!

## Default Credentials

<script src="https://gist.github.com/pranciskus/dd84ef5a7aea50a3fe561808699a7b90.js"></script>

## SSH (Secure Shell)

### Step 01: Enable SSH

**Note:** If you are using <a href="https://blokas.io/patchbox-os/" target="_blank">Patchbox OS</a>, you may skip this step because SSH is enabled by default.

**Option 01: Using Your Computer**

1. Insert the SD card to your computer's SD card reader
2. Navigate to the boot partition of the SD card (boot partition is the smaller one)
3. Create a blank file named `ssh` without any extension
4. Safely remove the SD card and insert it into your Raspberry Pi
5. When the Raspberry Pi boots, it looks for the `ssh` file and if it is found, SSH is enabled and the file is deleted

**Option 02: Using a Monitor and a Keyboard**

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Enter `sudo raspi-config` in a terminal (command) window
4. Select `Interfacing Options` and navigate to `SSH`
5. Choose `Yes`, `Ok` and `Finish`

### Step 02: Connect to Your Raspberry Pi Using SSH

**Note:** Make sure your Raspberry Pi is connected to your local network using an Ethernet cable or Wi-Fi and [you know the IP address of your Raspberry Pi](find-the-ip-address.md)!
  
**Option 01: Using Windows, Linux or macOS Computer**

1. Connect your computer to the same Network as your Raspberry Pi
2. Open a terminal (command) window and run `ssh username@ip_address` (use [the IP address of your Raspberry Pi](find-the-ip-address.md) and the correct [credentials](#default-credentials))

**Option 02: Using Android or iOS Device**

1. Download <a href="http://www.termius.com/" target="_blank">the Termius App</a> 
2. Connect your device to the same Network as your Raspberry Pi
3. Open the Termius App
4. Enter an alias of your choosing
5. Enter the IP address under the hostname
6. Complete the username and the password fields and hit **Save** (see [here](#default-credentials) for default username and password)

## VNC (Virtual Network Computing)

### Step 01: Connect to a Shell on Your Raspberry Pi

**Option 01: Remotely via SSH**

1. Connect your computer to the same Network as your Raspberry Pi
2. Open a terminal (command) window and run `ssh username@ip_address` (use [the IP address of your Raspberry Pi](find-the-ip-address.md))

**Option 02: Using a Monitor and a Keyboard**

1. Connect a monitor and a keyboard to your Raspberry Pi
2. Power it on and wait for it to boot
3. Open a terminal (command) window


### Step 02: Install & Enable VNC 

**Note:** If you are using <a href="https://blokas.io/patchbox-os/" target="_blank">Patchbox OS</a>, you may skip this step because VNC is enabled by default

1. In terminal (command) window run `sudo raspi-config`
2. Select `Interfacing Options` and navigate to `VNC`
3. Choose `Yes`, `Ok` and `Finish`


### Step 03: Connect to Your Raspberry Pi Using VNC

**Note:** If you are using <a href="https://blokas.io/patchbox-os/" target="_blank">Patchbox OS</a> and did not choose `desktop` or `desktop autologin` as the `boot environment`, you can still initiate the graphical interface by running the `startx` command, either while connected via SSH or using a keyboard connected directly to the Raspberry Pi. You can also change the `boot environment` setting by running `patchbox` command and going to the 'boot' menu.

1. Make sure your Raspberry Pi is connected to your local network using an Ethernet cable or Wi-Fi
2. Download the <a href="https://www.realvnc.com/en/connect/download/viewer/" target="_blank">RealVNC Viewer</a>
3. Launch the RealVNC Viewer and enter [the IP address of your Raspberry Pi](find-the-ip-address.md)
4. When asked, enter the username and the password

<script src="https://gist.github.com/pranciskus/dd84ef5a7aea50a3fe561808699a7b90.js"></script>
