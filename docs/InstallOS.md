# Install the Operating System to the SD Card

To write an OS image to the SD card for use with your Raspberry Pi, we recommend using the balenaEtcher software. Follow the steps listed below and get it done!

**Note:** All existing data on the SD card will be lost once the OS image flashing process is started.

## Step 01: Install balenaEtcher

### Windows

1. Download <a href = "https://www.balena.io/etcher/" target="_blank">balenaEtcher</a>
2. Double-click the *.exe file and follow the setup wizard
3. Run balenaEtcher in the Administrator Mode: right-click on balenaEtcher and choose ‘Run as administrator’

### macOS

1. Download <a href = "https://www.balena.io/etcher/" target="_blank">balenaEtcher</a>
2. Drag the balenaEtcher app to your Applications folder on your mac and double-click to open it

**Note:** <a href="https://community.blokas.io/t/raspberry-pi-write-sd-card-images-using-os-x-command-line/614" target='_blank'>Here's another way</a> to do it on macOS. 


### Linux

1. Download the <a href="https://www.balena.io/etcher/" target="_blank">AppImage</a> file
2. App images are self-contained runtimes that do not require manual installation
3. To make the file executable, run `chmod +x file_name`
3. Double-click the AppImage to run it

## Step 02: Download the OS image

1. Download a copy of the OS image you want to install (the Patchbox OS image can be downloaded <a href="https://blokas.io/patchbox-os/" target="_blank">here</a>)
2. Unzip the file after it has downloaded

## Step 03: Flash the SD card 

1. Insert the SD card to your computer's SD card reader
2. Launch balenaEtcher
3. Click **Flash from file** and select the file you want to upload (e.g. `2020-03-14-Patchbox.img`)
4. Click **Select target** and choose your SD card
5. Now click **Flash!** to write the image file to the SD card
6. When done, safely remove the SD card, insert it into your Raspberry Pi and power it on.

**Note:** If you want to flash another SD card with the same image, insert it and click **Flash Another**.

