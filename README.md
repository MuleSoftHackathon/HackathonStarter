Connect4U Hackathon Starter
================

This starter pack is here to get you started and up-to-speed for the Connect4U Hackathon.
It contains the following components:

- `\example`: An **example application** that demonstrates functionalities of the car, the sphero,
and the raspberry pi.
- `\RAML`: A **RAML file** that describes the RESTful API you'll be interacting with to control all
your device. For more information on RAML, please refer to [http://raml.org/](http://raml.org/)

To get started, follow the instructions below:

Environment Setup
=================

1. Download and intall node.js: [http://nodejs.org/](http://nodejs.org/)

2. Download and install git: [http://git-scm.com](http://nodejs.org/)

A. Clone this repository
=======================

1. Clone this repository to your computer, so that it
  fetches:
  ```
  git clone https://github.com/MuleSoftHackathon/HackathonStarter.git
  ```
2. Clone this Bluetooth Server repository to your computer, so that it
  fetches:
  ```
  git clone https://github.com/MuleSoftHackathon/BluetoothServer.git
  ```
3. (Optional) Clone PiServer and ApiServer for using with Raspberry Pi or running demo code
  ```
  git clone https://github.com/MuleSoftHackathon/pi.git
  git clone https://github.com/MuleSoftHackathon/apiserver.git
  ```

B. (Optional) Setup Api Server
===============================

1. Move into apiserver:
  ```
  cd apiserver
  ```

2. Install node modules and dependencies:
  ```
  npm install
  ```

3. Config keys (follow instructions in README.md in apiserver)

4. Start api server
  ```
  cd app
  node app
  ```

C. Setup the Bluetooth Server
==================================

1. Move into the `/BluetoothServer` folder:
  ```
  cd BluetoothServer
  ```

2. Install node modules and dependencies:
  ```
  npm install
  ```

3. Connect Bluetooth device to the server

4. Change the serial port name for each bluetooth device
  in BluetoothServer, search for rccar.js and sphero.js, replace '/dev/tty.HC-06-DevB' with '/dev/tty.YOUBLUETOOTHNAME-DevB' (e.g. '/dev/tty.Mule-Hack-1-DevB'), for more details, please see Readme.md in BluetoothServer.

5. Run bluetooth server:
  ```
  node app/app.js <api_server_ip> <api_server_port> <team_key>
  ```
  then, you should see the message if the parameters are correct
  ```
  Successfully connect to central server
  ```  
4. See Readme.md in BluetoothServer for more details.

D. Run the example project
====================

0. Install grunt
  ```
  npm install -g grunt
  ```
  
1. Go to the example directory
  ```
  cd example
  ```

2. Install node dependencies
  ```
  npm install
  ```

3. Run the demo
  ```
  grunt
  ```

4. Your browser will open a page to [`http://localhost:9000`](http://localhost:9000),
  and it should look like this:
  ![Example app screenshot](http://imgur.com/lt7iAdr.png)

5. Now open the Bluetooth settings panel and pair the sphero and the rccar with
your laptop.
  ### Bluetooth Pairing

  * **RCCar**: Pair with rccar with options code 1234 (default).
  * **Sphero**: Once removed from the charger, you need to shake the sphero twice until it lights up with your 3-color signature. At this point you should see the device in your Bluetooth settings (in System Preferences) and can click *Pair* to pair with the device. Any time the Sphero wakes up (e.g., was not "lit up" and you shook it to light it up) **you will have to remove and re-pair the device**.
    * **Remove and re-pair**: Any time you see the Sphero device in your Bluetooth settings but *Not Connected*, you should forget the device (right click -> *Remove*), wait for the Sphero to show up again, and click *Pair* again.
    * **Reset the device**: If you still have issues connecting, you can reset the device (put it on the charger) and try again. Make sure to remove the device from your paired Blueooth devices and re-pair after resetting.

6. Make sure your sphero and the car is *paired with your computer* using Bluetooth, click on the
*connect* button to open the connection to both Bluetooth devices.

7. Issue any command with the *FWD*/*BWD*/*LEFT*/*RIGHT* button to move the car around.
If something is within the 10-inch range of the distance sensor on the raspberry pi after the
car moved, it will trigger the sphero to flash for 5 seconds.

8. Now go ahead and start hacking something epic!

E. Run the demo for PI
=============
0. setup Raspberry PI, please see Readme.md in pi

1. Go to the demo directory
  ```
  cd demo 
  ```
2. Config pi server address
  ```
  vi motionSensor.js
  ```
  replace the url with desired pi address
  
3. Start the server
  ```
  node motionSensor.js
  ```

This is a sample code for using motion sensor, it puts motion hook in the Pi server. Whenever a motion is detected, it sends a trigger to the sphero to flash (with the example above running).
