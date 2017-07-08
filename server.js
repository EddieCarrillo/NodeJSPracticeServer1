// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

/*Use the express module*/
var express = require('express');
var bodyParser = require("body-parser");
//Create an express server
var app = express();
//Json data
var jsonData = {count: 12, message: 'hey'};


//Get Request at root path 
app.get('/', function(req, res){
	//Send the index.html file 
	res.sendFile(__dirname + '/index.html', function(err){
		if (err){
			//Unless there is an error!
			res.status(500).send(err);
		}
	});
});

app.get('/data', function(req, res){
	res.send(jsonData);
});
var port = 3000;
app.listen(port, function(){
	console.log("Listening on http://localhost:", port);
})



