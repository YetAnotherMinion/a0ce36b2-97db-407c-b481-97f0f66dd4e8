var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

// this is for storage api
const Cu = require("chrome");

/* DOES NOT WORK RIGHT NOW
Cu.components.utils.import("resource://gre/modules/Services.jsm");
Cu.components.utils.import("resource://gre/modules/FileUtils.jsm");

let file = FileUtils.getFile("ProfD", ["my_db_file_name.sqlite"]);
let dbConn = Services.storage.openDatabase(file); // Will also create the file if it does not exist
dbConn.executeSimpleSQL("CREATE TEMP TABLE table_name (column_name INTEGER)");
*/

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
}

function tabCallback(tab) {
	tab.attach({
		contentScript: "document.body.style.border = '5px solid green';"
	});
}

