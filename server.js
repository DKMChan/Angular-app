var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');



var dbController = require('./server-controllers/db-controller.js');
var apiController = require('./server-controllers/apicontroller.js');
var passportController = require('./server-controllers/passport-controller.js');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* -- Show App Controllers -- */
dbController(app);
apiController(app);
passportController(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Express server listening on port ' + app.get('port'));
});

