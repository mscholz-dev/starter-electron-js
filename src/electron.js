const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

if (require("electron-squirrel-startup")) app.quit();

const createWindow = () => {
  const defaultHeight = 768;
  const defaultWidth = 1024;
  const mainWindow = new BrowserWindow({
    height: defaultHeight,
    minHeight: defaultHeight,
    minWidth: defaultWidth,
    maxHeight: defaultHeight,
    maxWidth: defaultWidth,
    width: defaultWidth,
  });

  // remove menu
  Menu.setApplicationMenu(new Menu());

  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // display inspector
  // mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  // Mac behavior
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
