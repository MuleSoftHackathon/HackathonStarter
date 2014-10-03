Connect4U Hackathon Starter
================

This starter pack is here to get you started and up-to-speed for the Connect4U Hackathon.
It contains the following components:

- `\BluetoothServer`: A **Bluetooth server** that will run locally on your machine, accepting http requests forwarded by
the API server, and translating them into Bluetooth commands to the car or the sphero.
- `\example`: An **example application** that demonstrates functionalities of the car, the sphero,
and the raspberry pi.
- `\RAML`: A **RAML file** that describes the RESTful API you'll be interacting with to control all
your device. For more information on RAML, please refer to [http://raml.org/](http://raml.org/)

To get started, follow the instructions below:

Environment Setup
=================

1. Download and intall node.js: [http://nodejs.org/](http://nodejs.org/)

2. Connect your laptop to the **connect4U_2.4G** or **connect4U_5G** wifi network, with the password `connect4U`

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
3. (Optional) Clone PiServer and ApiServer for using with Raspberry Pi
  ```
  git clone https://github.com/MuleSoftHackathon/pi.git
  git clone https://github.com/MuleSoftHackathon/apiserver.git
  ```

B. Setup the Bluetooth Server
==================================

1. Move into the `/BluetoothServer` folder:
  ```
  cd BluetoothServer
  ```

2. Install node modules and dependencies:
  ```
  npm install
  ```
  or
  ```
  sudo npm install
  ```

3. Run bluetooth server:
  ```
  node app/app.js <api_server_ip> <api_server_port> <team_key>
  ```
  then, you should see the message if the parameters are correct
  ```
  Successfully connect to central server
  ```  

C. Run the example project
====================

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

  * **RCCar**: Pair with rccar with options code 1234.
  * **Sphero**: Once removed from the charger, you need to shake the sphero twice until it lights up with your 3-color signature. At this point you should see the device in your Bluetooth settings (in System Preferences) and can click *Pair* to pair with the device. Any time the Sphero wakes up (e.g., was not "lit up" and you shook it to light it up) **you will have to remove and re-pair the device**.
    * **Remove and re-pair**: Any time you see the Sphero device in your Bluetooth settings but *Not Connected*, you should forget the device (right click -> *Remove*), wait for the Sphero to show up again, and click *Pair* again.
    * **Reset the device**: If you still have issues connecting, you can reset the device (put it on the charger) and try again. Make sure to remove the device from your paired Blueooth devices and re-pair after resetting.

6. Make sure your sphero and the car is *paired with your computer* using Bluetooth, click on the
*connect* button to open the connection to both Bluetooth devices.

7. Issue any command with the *FWD*/*BWD*/*LEFT*/*RIGHT* button to move the car around.
If something is within the 10-inch range of the distance sensor on the raspberry pi after the
car moved, it will trigger the sphero to flash for 5 seconds.

8. Now go ahead and start hacking something epic!
