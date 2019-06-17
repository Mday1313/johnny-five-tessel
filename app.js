var express = require('express');
var app = express();


var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');
var tesselController = require('./controllers/tesselController');

var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

htmlController(app);
apiController(app);

app.listen(port);

console.log("Server running at 10.92.173.109:" + port);