# PatchboxOS

![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/PatchboxOS.png)

PatchboxOS is an OS image based on Raspbian Lite preconfigured with audio software for a smooth user experience. On the first boot, a configuration wizard will run to help set up the system, including configuring the Jack backend parameters and connecting to WiFi network.

The default user name is ‘**patch**’ and its password is '**blokaslabs**'. The WiFi hotspot’s (called ‘**Patchbox**’, enabled by default) password is also ‘**blokaslabs**’.

You may give the image a try even if you don't have a Pisound yet - the configuration tool allows for easy configuration of the audio device to use, so you may use built-in, USB or other audio cards.

The main highlights of the included software:


- 4.14.91-rt49-v7+ real time kernel
- [amidiauto 1.00](amidiauto.md)
- [Audacity 2.1.2](SoftwareGuides.md#audacity)
- Jack backend 1.9.12
- [Patchage 1.0.0](SoftwareGuides.md#patchage)
- [Pianoteq Standard Trial 6.4.1](SoftwareGuides.md#pianoteq-standard-trial)
- <a href="https://blokas.io/pisound/docs/Pisound-App/" target="_blank">Pisound software</a>
- [Pure Data 0.49.0](SoftwareGuides.md#pure-data)
- [Sonic Pi 3.1.0](SoftwareGuides.md#sonic-pi)
- [Super Collider 3.9.3](SoftwareGuides.md#supercollider)
- [touchosc2midi 0.10.0](SoftwareGuides.md#touchosc2midi)

All of the audio software is configured to use the shared Jack backend service. This means that multiple audio programs may use the audio card and play together simultaneously, including the web browser.

See [Getting Started](GettingStarted.md) for quick guidance!


## Contributing

You may contribute to the PatchboxOS project by submitting a pull request to the <a href="https://github.com/BlokasLabs/patchbox-os-gen" target="_blank">image generation repository</a>.

The configuration utility source code is available <a href="https://github.com/BlokasLabs/patchbox-cli" target="_blank">here</a>.

