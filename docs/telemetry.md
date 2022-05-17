# Telemetry

Patchbox OS comes with Pisound software pre-installed, which includes the `blokas-telemetry` package. When enabled, the software occasionally gathers fully anonymous usage data points - active sessions count, Patchbox OS module versions, the percentage of sessions with Pisound HAT attached, and the Raspberry Pi model in use. These data points help us prioritize and make more informed decisions on future Patchbox OS updates. To facilitate privacy and secure transfer of the telemetry data to Blokas servers, it is anonymized, encrypted, and sent over a secure channel. In accordance with GDPR guidelines on anonymous usage data collection, `blokas-telemetry` package comes enabled by default.

## Opt-Out

If you don’t want to participate in our usage statistics program, run the following command in the terminal: `sudo systemctl disable --now blokas-telemetry.target`

## License

Name: blokas-telemetry
Copyright: 2017-2022 Vilniaus Blokas UAB [hello@blokas.io](mailto:hello@blokas.io)
License: Vilniaus Blokas UAB license

THIS SOFTWARE IS PROVIDED BY VILNIAUS BLOKAS UAB "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE
EXPRESSLY AND SPECIFICALLY DISCLAIMED. IN NO EVENT SHALL VILNIAUS BLOKAS UAB
BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS
AND CONTRIBUTORS "AS IS"

Vilniaus Blokas UAB may collect anonymized telemetry data about your use
of the Raspberry Pi, Pisound and Patchbox OS and make this data available
to us to help us understand how our software and hardware is performing in
order for us to know how to improve our products and offerings.

To facilitate privacy and secure transfer of the telemetry data to our
servers, it is anonymized, encrypted and sent over a secure channel.

To help us analyze the anonymous telemetry data, we are using a 3rd party
service called 'Mixpanel' - [https://mixpanel.com/](https://mixpanel.com/)