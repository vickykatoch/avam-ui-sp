let express = require("express"),
	app = express(),
	port: number = 8080;
	
app.use(express.static(__dirname));
app.use(express.static(__dirname+"/src"));

app.listen(port, ():void=>{
	console.log('HTTP server is running, listening on port# :' + port);	
});
	
