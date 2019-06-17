var tessel = require('tessel');
 var http = require('http');
 var five = require("johnny-five");
 var Tessel = require("tessel-io");
 var board = new five.Board({
    io: new Tessel(),
   
  });

  var pump = new five.Relay("b7");

  module.exports = {

    togglePump: function(callback){
        pump.toggle(1, function(err){
            if(err) {
                callback("error toggling pump", err);
            } else {
                callback();
            }
        });
    },

    startPump: function(){
        pump.on(1, function(err) {
            if (err){
                console.log(err);
            } else {} 
        });
    },

    stopPump: function() {
        pump.off(1, function(err){
            if(err) {
                console.log(err);
            }
            
        });
    }, 

    pumpState: function(callback) {
        pump.isOn(1, function(err, state){
            if (err) {callback(err)
            } else {
                callback(state)
            }
        });
    }


  }