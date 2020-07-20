### patchbox-module.json

The most important file of a Patchbox Module is the `patchbox-module.json`. It contains essential information, like version info,
display name, as well as the technical details like the various scripts for installing, launching, stopping and the list of system services
the module depends on.

See the complete reference [here](patchbox-module-json.md).

### Install Script

The provided install script should install any necessary software and files for the module to run. Debian packages are preferred for this. We may be able to provide hosting for your
Debian package, if you think it should be on http://apt.blokas.io/, please contact us!

Of course your script may compile the source code if it must, but ideally, it shouldn't take too long to complete.

See [MODEP](https://github.com/BlokasLabs/patchbox-modules/blob/master/modep/install.sh) for an example install script.

In case the script exits with non 0 value, the installation is considered failed.

If the `version` in the `patchbox-module.json` was incremented since the last time a module was installed, the install script will run again, and should be capable of upgrading the
installed older version.

### Launch Script & Services

A launcher script can be provided to start the desired software, especially if it must do something non-trivial. The script is invoked with the configured argument, if `launch_mode` is set to require one.
See [Pure Data](https://github.com/BlokasLabs/patchbox-modules/blob/master/puredata/launch.sh) for an example.

Alternatively, you may create systemd .service file(s) for your module and list them in the `services` section of the `patchbox-module.json`. These services will get started when activating the module.
See [MODEP](https://github.com/BlokasLabs/patchbox-modules/blob/master/modep/patchbox-module.json#L16) module and its [modep-mod-ui.service](https://github.com/BlokasLabs/modep-debs/blob/master/modep-mod-ui/modep-mod-ui-1.8.0/debian/modep-mod-ui.service) or [modep-mod-host.service](https://github.com/BlokasLabs/modep-debs/blob/master/modep-mod-host/modep-mod-host-1.8.0/debian/modep-mod-host.service)
for .service file examples. See [systemd documentation](https://www.freedesktop.org/software/systemd/man/systemd.service.html) for information on its syntax and capabilities.

### List Script

A list script can be set to provide possible start arguments for the module, usually a path to the patch/file to be started with the module.

The script should output the selections with one item per line.

See [Pure Data](https://github.com/BlokasLabs/patchbox-modules/blob/master/puredata/list.sh) for an example script.

### Stop Script

On stopping, a stop script should stop the software that was started by the launch script.

See [Pure Data](https://github.com/BlokasLabs/patchbox-modules/blob/master/puredata/stop.sh) for an exmaple script.

The systemd services are stopped automatically on module deactivation.

### Custom Pisound Button Config

It's possible to provide a custom configuration for the Pisound's button - upon activating a Patchbox Module, the custom config is activated. When the module is deactivated, the previous
system-wide config gets restored.

To get custom button actions for your module, place the scripts that should get triggered inside a `pisound-btn` subfolder of your module sources.
(See [ORAC](https://github.com/BlokasLabs/patchbox-modules/tree/master/orac/pisound-btn) for an example). Make sure the scripts have 'execute' permission,
if not, you have to do `chmod +x *.sh` on the scripts.

Then create a `pisound-btn.conf`, referencing the custom button scripts using relative path to them in `pisound-btn`. See [ORAC](https://github.com/BlokasLabs/patchbox-modules/blob/master/orac/pisound-btn.conf)
for an example.

And you have to mention this config availability in the `patchbox-module.json` file in the `depends_on` section:

```
...
"depends_on": [
    {
        "service": "pisound-btn.service",
        "config": "pisound-btn.conf"
    },
    ...
],
...
```

See ORAC's [patchbox-module.json](https://github.com/BlokasLabs/patchbox-modules/blob/master/orac/patchbox-module.json#L12) for an example.

### Custom amidiauto Config

If your module requires particular MIDI routing rules to take place, a custom `amidiauto.conf` can be provided, to be enabled automatically on module activation. The previous config gets restored
automatically on module deactivation.

To get custom `amidiauto.conf`, first create it in your module source, see [ORAC](https://github.com/BlokasLabs/patchbox-modules/blob/master/orac/amidiauto.conf) for an example.

Then you have to reference it in the `depends_on` section of the `patchbox-module.json`:

```
...
"depends_on": [
    {
        "service": "amidiauto.service",
        "config": "amidiauto.conf"
    },
    ...
],
...
```

See ORAC's [patchbox-module.json](https://github.com/BlokasLabs/patchbox-modules/blob/master/orac/patchbox-module.json#L9) for an example.
