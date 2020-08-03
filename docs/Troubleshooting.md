# Troubleshooting

In case something is not working right, here’s a list of things to check to help determine the cause of the issue.


## dmesg

Run `dmesg` or `dmesg | less` to see the kernel logs. It may contain useful information when debugging hardware failures. If you ran via `less`, press ‘q’ to exit.

## systemctl and journalctl

There’s a number of background services that are key to the system running smoothly. To get a quick overview of the system state, run `sudo systemctl status`. If ‘State’ says something else than ‘running’ it means at least one of the background services had an error and is not running. 

To dig a bit deeper, run `sudo systemctl` and use up/down keys to scroll through the list of the services, press ‘q’ to exit. Keep an eye out for any error statuses in the columns ‘LOAD’, ‘ACTIVE’ and ‘SUB’. 

Once you spot the failed service (let’s use ‘jack.service’ as an example), run `sudo systemctl status jack.service` to get a summary of the service status. If it did not provide enough information to know what’s up, then you can check the logs of the service by running `sudo journalctl -u jack.service`, hit the ‘End’ key on your keyboard to get to the very latest lines - the journal may contain data for many days.

### Key PatchboxOS services

**amidiauto.service** - the automatic MIDI interconnection service.

**jack.service** - the Jack backend service. If it has failed or its logs are indicating errors, you will not hear any audio. Try reconfiguring Jack to use a different audio card or larger buffers using `sudo patchbox-config`, going to ‘jack’ section.

**pisound-ctl.service** - the Pisound App control server process. It must be running for Pisound App to work.

**pisound-btn.service** - ****the Pisound Button background process. If it is not running, the Pisound’s button will not work.

**touchosc2midi.service** - the TouchOSC2MIDI bridge service. If it is not running, TouchOSC Apps will not work.

**wifi-hotspot.service** - this service is used to control whether PatchboxOS behaves as a WiFi hotspot and it is used to set the desired behavior.


## Comments

Have any questions or suggestions? Let us know!

## Community

Join our community forum for more tips and support! 