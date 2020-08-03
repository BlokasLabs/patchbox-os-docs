# amidiauto

`amidiauto`  is a background process which takes care of setting up the MIDI routings automatically, as soon as new devices are connected or new software instance is launched.

## MIDI on Linux Computers

The Linux MIDI implementation, provided by the ALSA (Advanced Linux Sound Architecture) project, follows quite a different model of operation compared to how MIDI is implemented on Windows or Mac.

The main idea behind ALSA MIDI is to have hardware MIDI ports as well as software ones and represent them by virtual MIDI ports that can be routed as desired by the user. 

Let’s take Pure Data as an example - when configuring the ALSA MIDI settings within PD, you have to input how many virtual input and output ports PD will create. Then you have to take another step of defining the interconnections between the PD ports and other software or hardware MIDI ports using `aconnect`, `aconnectgui` or `patchage`. This is in contrast to MIDI on other major OSes, where it’s usual to select the device name within the software being configured, and a direct connection between the selected device and the software is assumed. Some Linux audio software is implemented (or is based on MIDI libraries) in a way that emulates the model of other major OSes where you get to pick the device in the configuration options and a direct connection is made.

The ability to interconnect the MIDI ports as desired opens up some interesting possibilities of chaining multiple software programs, but by necessity it also makes it a bit more complicated to use.

## Enter `amidiauto`

To make the use of MIDI on Linux a straightforward exercise, we have created a small background process which automatically sets up the MIDI connections when new software instances get launched or a new MIDI controllers gets connected to the system.

Automatic routings are achieved by categorizing the available MIDI ports as being software ones (like Pure Data, SuperCollider, etc.) and hardware ones (like USB MIDI keyboard, USB MIDI controller, DIN-5 ports, `touchosc2midi`, etc.), then as soon as some change in available ports gets detected, the new software or hardware port gets connected to the existing ports in the opposing category.

This takes care of a lot of use cases. However, it might not suit some more advanced MIDI routings, in particular when it is intended to interconnect a software MIDI port to another software port, or the same for ports categorized as hardware ones. This can be worked around by either manually tweaking the connections after they were automatically set up using software like `patchage`, `aconnect` or `aconnectgui`.

**Enabling `amidiauto`**

It can be enabled by running:
```
    sudo systemctl enable amidiauto
    sudo systemctl start amidiauto
```

**Disabling `amidiauto`**

It can be enabled by running:
```
    sudo systemctl stop amidiauto
    sudo systemctl disable amidiauto
```

## Contributing

The source code for `amidiauto` is hosted on <a href="https://github.com/BlokasLabs/amidiauto" target="_blank">GitHub</a>. Pull requests expanding the functionality or fixing any issues are welcome!

## Comments

Have any questions or suggestions? Let us know!

## Community

Join our community forum for more tips and support!

