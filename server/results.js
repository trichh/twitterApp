module.exports = function() {
  var User = require('./models/user.js');
  var express = require('express');
  var router = express.Router();
  
    router.get('/', function(req, res){
      User.find({}, function(err, users) {
        if(err) throw err;
        console.log(users);
      });
    });
  
  return router;
}