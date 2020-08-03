# Install the operating system on the SD card

For the OS image transfer to the Raspberry Pi, we recommend you to use the SD card and the balenaEtcher software which will format the SD card and will flash the image to it. Follow the steps listed below and get it done!

<a href="https://community.blokas.io/t/raspberry-pi-write-sd-card-images-using-os-x-command-line/614" target='_blank'>Here's another way to do it with macOS</a>

### STEP 01: Install balenaEtcher

**Windows**  

1. Download <a href = "https://www.balena.io/etcher/" target="_blank">balenaEtcher</a>
2. Double-click the *.exe file and follow the setup wizard
3. Run balenaEtcher in the Administrator Mode: right-click on balenaEtcher and choose ‘Run as administrator’

**macOS** 

1. Download <a href = "https://www.balena.io/etcher/" target="_blank">balenaEtcher</a>
2. Drag the balenaEtcher app to your Applications folder on your mac and double-click to open it


**Linux** 

1. Download the <a href="https://www.balena.io/etcher/" target="_blank">AppImage</a> file
2. App images are self-contained runtimes that do not require manual installation
3. To make the file exacutable, run `chmod +x file_name`
3. Double-click the image to run it

### STEP 02: Download the OS image

1. Download a copy of the OS image you want to install (the Patchbox OS image can be downloaded <a href="https://blokas.io/patchbox-os/" target="_blank">here</a>)
2. Unzip the file after it has downloaded

### STEP 03: Flash the SD card 

1. Insert the SD card to your computer's SD card reader
2. Launch balenaEtcher
3. Click **Flash from file** and select the file you want to upload (e.g. `2020-03-14-Patchbox.img`)
4. Click **Select target** and choose your SD card
5. Now click **Flash!** to write the image file on the SD card
6. When done, safely remove the SD card, insert it into your Raspberry Pi and power it on.

**Note:** before writing and verifying the image (this is shown by a progress bar), balenaEtcher will format the SD card by clearing all pre-existing data 

**Note:** if you want to flash another SD card with the same image, insert it and click **Use same image**

## Comments

Have any questions or suggestions? Let us know!

## Community

Join our <a href = "https://community.blokas.io/" target="_blank">community</a> forum for more tips and support! 