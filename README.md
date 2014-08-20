Hackathon Starter
================

Starter pack for the Connect4U Hackathon

Make sure you follow the instructions below:

A.Clone this repository
=======================

1. Clone this repository to your computer
```
git clone https://github.com/MuleSoftHackathon/HackathonStarter.git
```

2. Fetch the Bluetooth Server submodule
```
cd HackthonStarter
git submodule update --init
```

B.Setup the Bluetooth Server
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

C.Run the example project
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

4. Open the browser and navigate to `http://localhost:9000`
