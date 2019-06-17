window.onload = function(){


    //on startup
    setEventListeners();
  
    $.get('/getState/', function(data){
        var data = JSON.parse(data);
        update(data)
  
      });
  
  
      function setEventListeners(){
        var pumpButton = document.getElementById('pump');
        pumpButton.addEventListener('click', togglePump);
      }
      
      function togglePump () {

        $.get('/pump/', function(data){
            var data = JSON.parse(data);
            update(data)
  
          });
        }

    }