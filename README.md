# firstElectronApp

`https://www.electronforge.io/guides/framework-integration/react`

`https://dev.to/navdeepm20/electron-with-react-create-cross-platform-desktop-app-easily-1a13`

## For build and Packaging 

`https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging`

## Notification

### Electron Api's

Electron api's are only available for main.js file, so notification function must be declared there using ipcMain

`ipcMain.on(<CustomEventName>, function())` 

and ipcRenderer, contextBridge declare a variable 

```
const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    <NameOfFunction>: (<parameters>)=> {
        ipcRenderer.send(<eventListnerDeclaredByipcMain>, <parametrs>)
    },
});
```

where electronAPI is a variable which can be accessed using

`const {electronAPI} = window`

anywhere in react files


### react-desktop-notification

so used react desktop notification instead.

### Import React

import React from 'react'
is a must to make file renderable.

### For Tailwind Intigration 

` npm i --save-dev tailwindcss postcss-loader autoprefixer
  or
  yarn add -dev tailwindcss postcss-loader autoprefixer`

And then in webpack.renderer.config.js write

`rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {loader: 'postcss-loader'}],
});`

