var mongoose = require('mongoose');
var showSetup = require('./show-controller.js');
var userSetup = require('./user-controller.js');

module.exports = function(app){
    mongoose.connect('localhost');

}