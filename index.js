global.ELECTRON_CONFIG = global.ELECTRON_CONFIG || {};
global.ELECTRON_CONFIG.width = 960;
global.ELECTRON_CONFIG.height = 1080;

require( './js_electon/config_file.js' );
//require( './js_electon/config_url.js' );

global.initialized = function(){
	global.win.webContents.executeJavaScript( 'window.initialize();' );
	global.win.webContents.openDevTools();
};