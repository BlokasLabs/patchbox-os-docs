# PatchboxOS

![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/PatchboxOS.png)

PatchboxOS is an OS image based on Raspbian Lite and preconfigured with audio software for a smooth user experience. On the first boot, a configuration wizard will run and help you setup the system, including configuring the Jack backend parameters and connecting to WiFi network.
The default user name is ‘**patch**’ and its password is '**blokaslabs**'. The WiFi hotspot’s (called ‘**Patchbox**’, enabled by default) password is also ‘**blokaslabs**’.

You may give the image a try even if you don't have a Pisound yet - the configuration tool allows an easy configuration of the audio device to use, so you may use built-in, USB or other audio cards

## Module Manager

The Patchbox OS is built around the concept of modules. It helps to minimize the software setup and manual configuration and provides an easy way to switch between installed projects without the need to manually change system-wide setting.

Currently available modules:

- <a href="https://blokas.io/MODEP/" target="_blank">MODEP</a>
- [ORAC](https://community.blokas.io/t/orac-2-0-for-the-raspberry-pi/1099)
- [Pure Data](SoftwareGuides.md#pure-data)

The system can be easily extended to add support for more use cases.

## Included Software

The main highlights of the included software:

- 4.19.71-rt24 real time kernel
- [amidiauto 1.01](amidiauto.md)
- [Audacity 2.2.2](SoftwareGuides.md#audacity)
- Jack backend 1.9.12
- [Patchage 1.0.0](SoftwareGuides.md#patchage)
- [Pianoteq Standard Trial 6.6.0](SoftwareGuides.md#pianoteq-standard-trial)
- <a href="https://blokas.io/pisound/docs/Pisound-App/" target="_blank">Pisound software</a>
- [Pure Data 0.50.0](SoftwareGuides.md#pure-data)
- [Super Collider 3.10.0](SoftwareGuides.md#supercollider)
- [touchosc2midi 0.10.0](SoftwareGuides.md#touchosc2midi)

All of the audio software is configured to use the shared Jack backend service. This means that multiple audio programs may use the audio card and play together simultaneously, including the web browser.

## Contributing

You may contribute to the PatchboxOS project by submitting a pull request to the <a href="https://github.com/BlokasLabs/patchbox-os-gen" target="_blank">image generation repository</a>.

The configuration utility source code is available <a href="https://github.com/BlokasLabs/patchbox-cli" target="_blank">here</a>.

