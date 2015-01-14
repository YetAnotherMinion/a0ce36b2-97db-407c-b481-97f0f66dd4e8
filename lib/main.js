var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var db = require('sdk/simple-storage');

// this is for storage api
//uses the addon sdk, regular {interfaces: Ci, utils: Cu, classes: Cc} = Components
const {Cu} = require("chrome");

/* DOES NOT WORK RIGHT NOW
Cu.components.utils.import("resource://gre/modules/Services.jsm");
Cu.components.utils.import("resource://gre/modules/FileUtils.jsm");

let file = FileUtils.getFile("ProfD", ["my_db_file_name.sqlite"]);
let dbConn = Services.storage.openDatabase(file); // Will also create the file if it does not exist
dbConn.executeSimpleSQL("CREATE TEMP TABLE table_name (column_name INTEGER)");
*/
//store each page the user visits
if( !db.storage.pages)
	db.storage.pages = [];

db.storage.pages = [];

tabs.on("ready", pushUrl);

function pushUrl(tab) {
	db.storage.pages.push(tab.url);
	console.log("url added");
	console.log(db.storage.pages.slice(-1)[0]);
}

var button = buttons.ActionButton( {
	id: "wiki-link",
	label: "Visit Wiki",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});

function handleClick(state) {
	tabs.open( {
		url: "https://www.wikipedia.org",
		onReady: tabCallback
	});
	console.log(db.storage.pages)
}

function tabCallback(tab) {
	tab.attach({
		contentScript: "document.body.style.border = '100px solid green';"
	});
}




