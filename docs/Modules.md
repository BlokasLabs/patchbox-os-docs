# Modules

![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/modules.png)

The Patchbox OS is built around the concept of modules that effortlessly turns your Raspberry Pi into a standalone music\* box.


<sup>\* Not really restricted to music. 😉</sup>

The Patchbox OS has a built-in **Module Manager** which helps to minimize the software setup and manual configuration, provides an easy way to switch between installed projects without the need to manually change system-wide settings.

Currently available modules:

- <a href="https://blokas.io/MODEP/" target="_blank">MODEP</a>
- <a href="https://community.blokas.io/t/orac-2-0-for-the-raspberry-pi/1099" target="_blank">Orac</a>
- <a href="https://puredata.info/" target='_blank'>Pure Data</a> 

The system can be easily extended to add support for more use cases.


Let's peek at an example of what a module can actually do. Consider the Pure Data module - it lets users pick a patch to launch immediately. And it will also get launched everytime the system is started.
So let's say you picked a synth patch, plug in a MIDI keyboard, hookup audio output and voilà - you have a nice compact hardware synth module! Now if you're happy with the patch, bring your system to a gig, power it up, and the same patch will get started automatically, all of the autostart details have been taken care of by the Module Manager.

Upon activating any module, the Module Manager will disable any previously active module, install any required software, apply the system configuration and will take care of all of the
autostart stuff. One may easily switch to another module, repurposing the system for a different use case, while using a single SD card.

## Patchbox Module

A Patchbox Module consists of a module definition file (`patchbox-module.json`), a couple of scripts and any necessary config files.

This is a simple <a href="https://github.com/BlokasLabs/sine-module" target='_blank'>Sine Wave generator module</a> which shows how easy it is to import a new module.

This Sine Wave generator module can work as an audio test for your Pisound. 

**Install and Activate the Module**

1. Make sure `patchbox --version` is `1.1.3` or greater. If it is not, run `patchbox update`
2. To install the module, run
    ```
    patchbox module install https://github.com/BlokasLabs/sine-module
    ```
3. To activate the module, run (can be done via GUI too)
    ``` 
    patchbox module activate sine-module
    ```
4. You should hear a 440Hz sine wave. The frequency can be changed by clicking The Button on Pisound different number of times.
5. To deactivate the module, run
    ```
    patchbox module deactivate
    ```

*it also can be done by opening `patchbox` `modules` menu and selecting `none` module   


**For more information about how the modules work and how to create one, see the [Module Internals](Module-Internals.md) page.**


## MODEP

MOD DUO (Musician Operated Device DUO) is a multi-effects pedal which allows you to spice up your instrumentals and reproduce them instantly at home, studio or any other place 

MOD DUO is based on Linux Single-Board-Computer and LV2 plugins ecosystem. It has an intuitive drag-and-drop web-based interface so you can assemble your pedalboards as you do in real life. You can find more information about the MOD DUO workflow <a href="https://www.moddevices.com/products/mod-duo" target='_blank'>here</a>  
MODEP (MOD DUO Emulator for Pi) is an emulator that will allow you to play around with MOD system using your Raspberry Pi and <a href="https://blokas.io/pisound" target='_blank'>Pisound</a> or any other Raspberry Pi supported sound card.

By the way, MOD DUO team has done a remarkable job for the whole Linux audio open-source community, so if you like this emulator you should go get <a href="https://www.moddevices.com/" target='_blank'>the real thing</a> 

<a href="https://blokas.io/modep/docs/Setup/" target='_blank'>the MODEP setup</a>     

## ORAC

Orac is a virtual modular system based on Pure Data and created by Mark Harris (TheTechnobear). It is easy to use on any computing platform and provides various features such as Presets and Midi Learn. Orac is flexible for users - lets you create your own audio modules, and extend the ecosystem of Orac.

The Orac code is cross-platform and runs on the <a href="https://www.critterandguitari.com/organelle" target='_blank'>Organelle</a>, Raspberry Pi, <a href="https://bela.io" target='_blank'>Bela</a>, <a href="https://www.qubitelectronix.com/shop/nebulae" target='_blank'>Qubit Nebulae</a>, and <a href="https://github.com/mxmxmx/terminal_tedium" target='_blank'>Terminal Tedium</a>. For development purposes (only) Orac will also run on macOS.

More info about <a href="https://github.com/TheTechnobear/Orac/wiki" target='_blank'>Orac</a> 

## Pure Data

Pure Data is an open source visual programming environment and works on personal computers, embedded devices and smartphones. It is a major branch of the family of Max (patcher programming languages), originally developed by Miller Puckette at IRCAM. 

Pure Data (PD) enables everyone to create software graphically (without writing lines of code). PD can process and generate sound, video, 2D/3D graphics and other interfaces or MIDI inputs. It can easily work over local or remote networks and can integrate wearable equipment (motor systems, lighting rigs, etc.). PD can help you not only to realize complex systems for large-scale projects but also to learn the basics multimedia processing and visual programming methods. 

More info about <a href="https://puredata.info/" target='_blank'>Pure Data</a> 

