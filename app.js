const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 400,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, "index.js"),
        },
    });

    win.setMenuBarVisibility(false);
    win.loadFile("index.html");
}

app.whenReady().then(createWindow);
