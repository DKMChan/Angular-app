var mongoose = require('mongoose');
var showSetup = require('../public/models/Show.js');
var userSetup = require('../public/models/User.js');

module.exports = function(app){
    mongoose.connect('localhost');

}