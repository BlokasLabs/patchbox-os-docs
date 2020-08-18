# Software Guides

All of the pre-installed software is configured to use the shared Jack backend, so all of it should work right away without a need to tweak the settings. If you install some new software, make sure to configure it to use Jack in its audio settings.

Below are some quick tutorials demonstrating the basic use of the included software.

It could be interesting to keep `patchage` running in the background, to see a visualization of the current Jack backend state and the interconnections between the software and hardware.

## Audacity
![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/Audacity.png)


<a href="https://www.audacityteam.org/" target="_blank">Audacity</a> is a multi-track wave recorder/editor tool which is pretty simple to use. After launching it, just click the Record button and it will record the input ports that are available to the Jack backend. After you’re done recording, hit the Stop button, and then the Play button to listen to what was recorded.

Audacity behaves in a bit of an unusual way in the Jack-compatible software world, as it creates its Jack ports only for the duration the playback or recording is happening. That makes it a bit difficult to do custom routing in `patchage`. See <a href="https://wiki.audacityteam.org/wiki/Linux_Issues#JACK" target="_blank">Audacity’s Wiki</a> for more details on its Jack integration.

## Patchage
![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/Patchage.png)

<a href="https://drobilla.net/software/patchage" target=_blank">Patchage</a> is a tool to visualize and modify the state of Jack and ALSA MIDI applications. The green colors indicate Audio signal ports and interconnections, red ones indicate JACK MIDI ports and interconnections (in practice not used much, as same capability is provided by ALSA MIDI) and the purple ones indicate the ALSA MIDI ports and interconnections.

The above screenshot shows how the Jack state looks like with Pure Data launched - the Pisound’s input stream is connected to Pure Data’s input, and Pure Data’s output is connected to Pisound’s output. The MIDI routings show that hardware inputs are connected to Pure Data and `pisound-ctl` and Pure Data’s MIDI output is connected to the hardware outputs.

Using this tool you may cut the undesired connections and make new ones.

## Pianoteq Standard Trial
![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/Pianoteq.png)


<a href="https://www.pianoteq.com/" target="_blank">Pianoteq</a> is a virtual instrument that reproduces acoustic sounds and playability of a real instrument by physically modeling the selected instrument. This is a trial version of the software, it has some limitations such as disabled keys, and it stops playing after some time.

Simply start the program, hook up a MIDI keyboard via USB or DIN-5 input port, and play around. Or if you don’t have a keyboard available, you can still play with your mouse using the keyboard at the bottom, or play a MIDI track using the top bar.

It is available as an LV2 plugin too, so it can be used in LV2 host software.

## Pure Data
![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/PureData.png)


<a href="http://puredata.info/" target="_blank">Pure Data</a> is a visual programming language for multimedia.

The OS image comes bundled with a couple of example patches. Let’s give one of them a try - launch Pure Data, and open this file:

```
/usr/local/puredata-patches/GarageBeat/0_START.pd
```
It is a rhythmic generative patch, you may then try playing around with the controls in the UI.

Check out the <a href="https://blokas.io/pisound/docs/Pisound-App/" target="_blank">Pisound App</a> too which has an integration with Pure Data patches, it can be used to switch between patches and control its parameters using your phone and allows integrating <a href="https://community.blokas.io/t/pure-data-patch-with-parameters-in-the-pisound-app/622" target="_blank">MIDI mappable controls</a>.


## Sonic Pi
![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/SonicPi.png)

*Currently unavailable, will be added as a Patchbox module in the near future, once a debian package is built for it.*

<a href="https://sonic-pi.net" target="_blank">Sonic Pi</a> is The Live Coding Music Synth for Everyone.

Let’s build a very simple synth - paste the following code into the code area:

    use_synth :prophet
    
    live_loop :midi_piano do
      use_real_time
      note, velocity = sync "/midi/*/*/*/note_on"
      synth :prophet, note: note, amp: velocity / 127.0
    end

Click the ‘Run’ button, hook up a MIDI keyboard, and play!

Check out the Examples section at the bottom area for more stuff to try out!

## SuperCollider
![](https://raw.githubusercontent.com/wiki/BlokasLabs/patchbox-os-gen/images/SuperCollider.png)

<a href="https://supercollider.github.io/" target="_blank">SuperCollider</a> is a platform for audio synthesis and algorithmic composition. A lot of neat, tweet sized, examples can be found on the internet, like the one below by <a href="https://twitter.com/joshpar/status/100417407021092864" target="_blank">@joshpar</a>.  To run it, paste the contents into the code area, then do `Server→Boot Server`, then `Language→Evaluate File`.

    play{a=SinOsc.ar(LFNoise0.ar(10).range(100,1e4),0,0.05)*Decay.kr(Dust.kr(1));GVerb.ar(a*LFNoise1.ar(40),299,400,0.2,0.5,50,0,0.2,0.9)}

## TouchOSC2MIDI

<a href="https://github.com/velolala/touchosc2midi" target="_blank">TouchOSC2MIDI</a> is a background process that translates <a href="https://hexler.net/software/touchosc" target="_blank">TouchOSC</a> compatible App interactions on your mobile device to MIDI messages on the Patchbox OS.

To use it, Patchbox OS must be connected to a local network or act as a WiFi hotspot. Your portable device must be connected to the same network. Open the TouchOSC app settings, and enter the IP of Patchbox OS device into ‘TouchOSC Bridge’ setting. If your network configuration permits it, the Patchbox OS may be auto-detected within the settings.

After the IP is set up, you may use the app to control audio software just as if you were using a MIDI controller.
