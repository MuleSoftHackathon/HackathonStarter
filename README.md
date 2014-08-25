Hackathon Starter
================

This starter pack is here to get you started and up to speed for the Connect4U Hackathon.
It contains the following components:

- `\BluetoothServer`: A **Bluetooth server** that will run locally on your machine
- `\example`: An **example application** that demonstrates functionalities of the car, the sphero,
and the raspberry pi.
- `\RAML`: A **RAML file** that describes the RESTful API you'll be interacting with to control all
your device. For more information on RAML, please refer to [http://raml.org/](http://raml.org/)

To get started, follow the instructions below:

Environment Setup
=================

1. Download and intall node.js: [http://nodejs.org/](http://nodejs.org/)

2. Connect your laptop to the **connect4U_2.4G** or **connect4U_5G** wifi network


A. Clone this repository
=======================

1. Clone this repository to your computer with **--recursive** option, so that it
  fetches:
  ```
  git clone --recursive https://github.com/MuleSoftHackathon/HackathonStarter.git
  ```

1. Move into the `/HackthonStarter` folder:
  ```
  cd HackthonStarter
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
  grunt --serverIP=<api_server_ip>
  ```

4. Open the browser and navigate to [`http://localhost:9000`](http://localhost:9000),
  and You should see a page like this:
  ![Example app screenshot](http://imgur.com/lt7iAdr.png)
  
5. Open the bluetooth setting panel and pair with sphero and rccar.
    ### Bluetooth Pairing
    Once removed from the charger, you need to shake the sphero twice until it lights up with your 3-color signature. At this point you should see the device in your Bluetooth settings (in System Preferences) and can click *Pair* to pair with the device. Any time the Sphero wakes up (e.g., was not "lit up" and you shook it to light it up) **you will have to remove and re-pair the device**.
  
   * **Remove and re-pair**: Any time you see the Sphero device in your Bluetooth settings but *Not Connected*, you should forget the device (right click -> *Remove*), wait for the Sphero to show up again, and click *Pair* again.
  
   * **Reset the device**: If you still have issues connecting, you can reset the device (described in the Sphero *Quick-Start Guide* manual) and try again. Make sure to remove the device from your paired Blueooth devices and re-pair after resetting.

6. Make sure your sphero and the car is *paired with your computer* using Bluetooth, click on the
*connect* button to open the connection to both Bluetooth devices.

6. Issue any command with the *FWD*/*BWD*/*LEFT*/*RIGHT* button to move the car around.
If something is within the 10-inch range of the distance sensor on the raspberry pi after the
car moved, it will trigger the sphero to flash for 5 seconds.

7. Now go ahead and start hacking something epic!
