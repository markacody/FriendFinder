//LOAD DATA from friends.js

var friends = require('../data/friends.js');

//DEFINE ROUTES as an exportable function whose input paramter is the app

module.exports = function(app){
    //when the pa
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });
    //when the form is submitted, post new object to array
    app.post('/api/friends', function(req, res){
        friends.push(req.body);
        res.json(true);
    });
    
    
};
