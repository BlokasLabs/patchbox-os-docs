## Examples

Here's a quick list of examples to take a look at to see various fields in action.

| Examples | | | |
| ---- | ---- | ---- | ---- |
| <a href="https://github.com/BlokasLabs/patchbox-modules/blob/master/modep/patchbox-module.json" target="_blank">MODEP</a> | <a href="https://github.com/BlokasLabs/patchbox-modules/blob/master/orac/patchbox-module.json" target="_blank">Orac</a>  | <a href="https://github.com/BlokasLabs/patchbox-modules/blob/master/puredata/patchbox-module.json" target="_blank">Pure Data</a> | <a href="https://github.com/BlokasLabs/sine-module/blob/master/patchbox-module.json" target="_blank">Sine Wave module</a> |

## Complete Reference

Here's the complete reference of `patchbox-module.json` fields. You should have basic knowledge of the <a href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a> format.

| Field/Name  | Parent | Type   | Description |
| ----------- | ------ | ------ | ----------- |
| name        | root   | string | **Required.** The name of the module. |
| version     | root   | string | **Required.** The version of the module. Recommended format is major.minor.build (like 1.0.0). When a version number changes, the module's install script is triggered upon activation. |
| description | root   | string | **Required.** Text description of the module. |
| author      | root   | string | **Required.** The author of the module. |
| launch_mode | root   | string | **Required.** Launch mode of the module. See below for possible values. |
| list        | launch_mode | string | Use the list script to let the user select file to launch. It will be given as an argument to the launch script. |
| argument    | launch_mode | string | Let user to enter the custom arguments string when enabling the module. It will be given as an argument to the launch script. |
| path        | launch_mode | string | Let user enter a path to use for launching the module. The path will be verified. It will be given as an argument to the launch script. |
| auto        | launch_mode | string | Simply launch the module without any additional user-provided arguments. |
| depends_on  | root   | array of strings and/or objects | A list of systemd service units the module depends on which are expected to be already present in the system, like 'jack.service', 'pisound-btn.service'. See 'service' description below for details of the value. |
| services    | root   | array of strings and/or objects | A list of systemd service units the module depends on which it provides itself. See [MODEP module](https://github.com/BlokasLabs/patchbox-modules/blob/master/modep/patchbox-module.json) for an example. See 'service' description below for details of the value. |
| service     | depends_on / services | object | An object with 'service' and 'config' keys. |
| service     | depends_on / services / service | string | The name of systemd service unit. |
| config      | service | string | Path to a config file for the service to be used while the module is active. Currently overriding pisound-btn and amidiauto configs is implemented. See <a href="https://github.com/BlokasLabs/patchbox-modules/tree/master/orac" target="_blank">ORAC</a> for an example. More implementations could be added, please contact us. |
| scripts     | root   | object | **Required.** A dictionary of scripts to use for various actions. |
| install     | scripts | string | **Required.** The path to the shell script to run the first time the module is activated, or its version increased since last time it was run. |
| list        | scripts | string | The path to the shell script that generates a list of usable files / patches for the module. See <a href="https://github.com/BlokasLabs/patchbox-modules/blob/master/puredata/list.sh" target="_blank">Pure Data's list</a> for an example. |
| launch      | scripts | string | Launcher script. An argument will be provided to the script, if launch_mode is set appropriately. |
| stop        | scripts | string | Stopper script. It should stop the program started by launch script. |
