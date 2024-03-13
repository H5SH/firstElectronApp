# firstElectronApp

My first Electron App, a cross platform desktop App builder

## First create a simple react app using

`npx create-react-app <name>`

## To Install Electron and electron-builder

`npm i -D electron electron-is-dev`
`npm install electron electron-builder --save-dev`

The command also installed a useful npm package called electron-is-dev used for checking whether our electron app is in development or production. You used the -D flag to install electron under dev dependancies.

### Configure Electron

Create a new file in the root directory, this file will serve as main entry point for electron.
Add Folloing lines to electron.js file

`
// electron.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startURL = isDev
    ? '<http://localhost:3000>'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);

  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
`

This code sets up the main Electron application window and loads the React application either from the development server when in development mode or from the build directory when in production mode.

## Updating

Modification in the pacake.json to notify it about the electron.js

`
// package.json
{
  // ...
  "electron": "electron .",
  "dist": "electron-builder",
  "main": "electron.js",

  "build": {
    "appId": "com.example.myapp",
    "productName": "My Electron App",
    "directories": {
      "output": "dist"
    }
  },

  // ...
}
`
The "main" field specifies the entry point for Electron, and the "build" section provides configuration options for electron-builder, including the appId, productName, and output directory for distribution.

## Running Electron

- Start development server
`npm start`

- run Electron Application in a different terminal
`npm run electron`

## Building Distributable Packages

To package and distribute your Electron application to users, you need to create platform-specific distributable packages. electron-builder makes this process easier.

- Before building the package, stop the running Electron application and React development server.
- To build the package for your current platform, run the following command:

`npm run build`

This command will generate a distributable package in the dist directory.

To build packages for multiple platforms, you can use the following command:

`npm run dist`

The above command will create packages for Windows, macOS, and Linux in the dist directory.
