# Modules

![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/modules.png)

Patchbox OS has a built-in **Module Manager** that effortlessly turns your Raspberry Pi into a standalone music\* box.

<sup>\* Not really restricted to music. 😉</sup>

A **Patchbox Module** is essentially a self-sufficient use case for a standalone, headless system.

Let's peek at an example of what a module can actually do. Consider the Pure Data module - it lets users pick a patch to launch immediately. And it will also get launched everytime the system is started.
So let's say you picked a synth patch, plug in a MIDI keyboard, hookup audio output and voilà - you have a nice compact hardware synth module! Now if you're happy with the patch, bring your system to a gig,
power it up, and the same patch will get started automatically, all of the autostart details have been taken care of by the Module Manager.

Upon activating any module, the Module Manager will disable any previously active module, install any required software, apply the system configuration and will take care of all of the
autostart stuff. One may easily switch to another module, repurposing the system for a different use case, while using a single SD card.

## Patchbox Module

A Patchbox Module consists of a module definition file (`patchbox-module.json`), a couple of scripts and any necessary config files.

Take a look at this simple [Sine Wave generator module](https://github.com/BlokasLabs/sine-module) and the existing modules [here](https://github.com/BlokasLabs/patchbox-modules) for working examples.

Before trying it out, let's make sure `patchbox --version` is `1.1.1` or greater. If it is not, run:

```
patchbox update
```

Then run this command to install it:

```
patchbox module install https://github.com/BlokasLabs/sine-module
```

And this one to activate it (can be done via GUI too):

```
patchbox module activate sine-module
```

Now you should hear a 440Hz sine wave. The frequency can be changed by clicking The Button on Pisound different number of times.

Run `patchbox module deactivate` to stop the active module. (or select `none` module in `patchbox` `modules` menu)

Detailed description of the module files will be available soon.
