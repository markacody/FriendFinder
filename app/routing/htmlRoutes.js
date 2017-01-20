//dependencies
var path = require('path');

//define routes as an exportable function
module.exports = function(app){
    //HTML GET requests and responses defined and HTML pages
    app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found, display the home page
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};