//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Create a server with express
var app = express();

//Use the host server's choice of port number or use 8080 locally 
var PORT = process.env.PORT || 8080;

//Use body parser to enable the server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Point the server to routes 
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Start the server and listen to the port
app.listen(PORT, function(){
    console.log('app listening on PORT: ' + PORT);
});