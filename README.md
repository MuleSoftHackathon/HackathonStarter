Hackathon Starter
================

Starter pack for the Connect4U Hackathon

Make sure you follow the instructions below:

A. Clone this repository
=======================

1. Install nodeJS from [here](http://nodejs.org/)

2. Clone this repository to your computer
  ```
  git clone --recursive https://github.com/MuleSoftHackathon/HackathonStarter.git
  ```

3. Fetch the Bluetooth Server submodule
  ```
  cd HackthonStarter
  git submodule update --init
  ```

B. Setup the Bluetooth Server
==================================

1. Go to bluetooth directory
  ```
  cd BluetoothServer
  ```

2. Install node modules
  ```
  npm install
  ```
  or
  ```
  sudo npm install
  ```

3. Run bluetooth server
  ```
  node app/app.js central_server_ip your_key
  ``` 
  then, you should see the message
  ```
  Connect to central server
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

4. Open the browser and navigate to [`http://localhost:9000`](http://localhost:9000)
