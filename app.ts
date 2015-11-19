let express = require("express"),
	app = express(),
	port: number = 8081;
	
app.use(express.static(__dirname));
app.use(express.static(__dirname+"/src"));

app.listen(port, ():void=>{
	console.log('HTTP server is running, listening on port# :' + port);	
});
	
/*git config credential.helper store : command to cache git credentials*/