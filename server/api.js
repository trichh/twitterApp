module.exports = function() {
  var User = require('./models/user.js');
  var express = require('express');
  var Twitter = require('twitter');
  var router = express.Router();

  var client = new Twitter({
    consumer_key: '2H4Bl62ZYVCsc1NsjXTbR3iUg',
    consumer_secret: 'Sq8mZxDFn6e0hEa7etM9U3UNKxs5oslyceMcp3iYBtK8CVcZoS',
    access_token_key: '458134345-GPbtxTjBldw4FTVrqZHeklpXk394FhNwJPxJorSo',
    access_token_secret: 'tKcN3iwOo76pQAHuHgjvWm296wla50yaQ88wsRqdHQsgh'
  });
  
  
    
    router.get('/', function(req, res){
      
      var params = {q: req.query.q, lang: 'en', count: 100};
        
      client.get('search/tweets', params, function(error, tweets, response){
        if(error) throw error;
        var retweet = [];
        var total = 0;
        for(var i in tweets.statuses) {
          total += tweets.statuses[i].retweet_count;
        };
        
        var player = new User({
          name: req.query.q,
          retweet_count: total
        });
        
        player.save(function(err) {
          if(err) throw err;
          console.log("player saved succesfully");
        });
        
        res.end();
      });
        
    });
  
  return router;
}