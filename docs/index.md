# Introduction to Patchbox OS
![](/images/PatchboxOSTerminal.png)

The Patchbox OS is an OS image based on Raspberry Pi OS Lite and preconfigured with audio software for a smooth user experience. On the first boot, a configuration wizard will run and help you to set the system up, including configuring the Jack backend parameters and connecting to a Wi-Fi network.

> Never used the Raspberry Pi before? Head straight to the [Raspberry Pi Essentials](install-os-to-sd-card.md)!
> Want to try the Patchbox OS? Head straight to the [First Run](first-run-options.md) section!

> You may give the image a try even if you don't have a <a href="https://blokas.io/pisound/" target="_blank">Pisound</a> sound card - the configuration tool allows for an easy configuration of the audio device, so you may use built-in, USB or other audio cards.


## Module Manager

The Patchbox OS is built around the concept of [modules](modules.md). It helps to minimize the software setup and manual configuration as well as provides an easy way to switch between installed projects without the need to manually change system-wide settings.

Currently available modules:

- <a href="https://blokas.io/modep/" target="_blank">MODEP</a>
- <a href="https://community.blokas.io/t/orac-2-0-for-the-raspberry-pi/1099" target="_blank">Orac</a>
- <a href="https://puredata.info/" target='_blank'>Pure Data</a> 

The system can be easily extended to add support for more use cases.

## Included Software

The main highlights of the included software:

- 5.15.36-rt41 real time kernel
- [amidiauto 1.01](amidiauto.md)
- [Audacity 2.4.2](software-guides.md#audacity)
- <a href="https://jackaudio.org/" target="_blank">Jack backend 1.9.17</a>
- [Patchage 1.0.4](software-guides.md#patchage)
- [Pianoteq 7.5.4](software-guides.md#pianoteq-standard-trial)
- <a href="https://blokas.io/pisound/docs/pisound-app/" target="_blank">Pisound software</a>
- [Pure Data 0.51.4](software-guides.md#pure-data)
- [Sonic Pi 3.3.1](software-guides/#sonic-pi)
- [Super Collider 3.11.2](software-guides.md#supercollider)
- [touchosc2midi 0.11.0](software-guides.md#touchosc2midi)

All of the audio software is configured to use the shared Jack backend service. This means that multiple audio programs may use the audio card and play together simultaneously, including the web browser.

## Contributing

You may contribute to the Patchbox OS project by submitting a pull request to the <a href="https://github.com/BlokasLabs/patchbox-os-gen" target="_blank">image generation repository</a>.

The configuration utility source code is available <a href="https://github.com/BlokasLabs/patchbox-cli" target="_blank">here</a>.
