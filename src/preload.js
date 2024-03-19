// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {contextBridge, ipcRenderer} = require('electron')

// const notification = new Notification()

contextBridge.exposeInMainWorld('electronAPI', {
    // for electron notification
    showNotification: (title, body)=> {
        ipcRenderer.send('show-notification', title, body)
    },

    flashIcon: ()=> {
        ipcRenderer.send('flash-icon')
    },
    updateBadge: (count)=> {
        ipcRenderer.sendSync('update-badge', count)
    }
});

