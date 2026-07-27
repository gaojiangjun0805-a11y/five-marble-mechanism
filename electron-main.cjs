const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow(){
  const mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    minWidth: 1100,
    minHeight: 760,
    backgroundColor: '#0a1019',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  mainWindow.loadFile(path.join(__dirname,'live.html'));
}

app.whenReady().then(()=>{
  createWindow();
  app.on('activate',()=>{ if(BrowserWindow.getAllWindows().length===0) createWindow(); });
});
app.on('window-all-closed',()=>{ if(process.platform!=='darwin') app.quit(); });
