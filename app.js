const { app, BrowserWindow, Tray, nativeImage } = require('electron');
const getLocation = require('electron-get-location')

const path = require('path');

var image = nativeImage.createFromPath("logo.png");
image.setTemplateImage(true);

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: image,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile(path.join(__dirname, path.join('gui', 'main.html')));
    // Open the DevTools.
    win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

let tray = null;
app.whenReady().then(() => {
    tray = new Tray('logo.png')
    tray.setToolTip('Redshift');
    const menu = Menu.buildFromTemplate([
        {
            label: 'Empty Application',
            enabled: false
        },

        {
            label: 'Settings',
            click: function () {
                console.log("Clicked on settings")
            }
        },

        {
            label: 'Help',
            click: function () {
                console.log("Clicked on Help")
            }
        }
    ]);
    //top.tray.setTitle("Tray Example"); // macOS only
    tray.setContextMenu(menu);
})