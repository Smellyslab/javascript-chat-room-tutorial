const { app, BrowserWindow } = require ('electron')

let win;

function createWindow() {
    //Create the browser window
    win = new BrowserWindow({
        width: 1500,
        height: 700,
        backgroundColor: '#ffffff',
        //icon: 'file:///' + __dirname + '/dist/assets/favicon.ico'
    })

    win.loadURL('file:///' + __dirname + '/index.html')
    win.on('close', function() {
        win = null
    })
}

// Create window on electron intialization
app.on('ready', createWindow)

//Quit when all windows are closed
app.on('window-all-closed', function(){

    // On macOS specific close process
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', function(){
    //macOS specific close process
    if(win === null){
        createWindow()
    }
}) 
