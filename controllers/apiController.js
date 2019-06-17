var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var tesselController = require('./tesselController');

module.exports = function(app){

    // Toggle pump and return response with pump state and list of active timers
  app.get('/pump/', function(req, res){

    tesselController.togglePump(function(){
      getCurrentState(function(state){
        res.send(state);
      })
  });
});


app.get('/getState/', function(req, res){

    getCurrentState(function(state){
      res.send(state);
    })

  });

}
function getCurrentState(callback){
   
    tesselController.pumpState(function(state){
      data = JSON.stringify({on: state});
      callback(data);
    });
  }
