Hackathon Starter
================

Starter pack for the Connect4U Hackathon

0. Before starting, make sure you follow the instructions below:
```
git clone https://github.com/MuleSoftHackathon/HackathonStarter.git
```

0. Fetch the Bluetooth Server submodule
```
cd HackthonStarter
git submodule update --init
```

Setup the Bluetooth Server locally
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
  node app/app.js
  ```
  then, you should see the message
  ```
  Connect to central server
  ```

Run the example project
====================
