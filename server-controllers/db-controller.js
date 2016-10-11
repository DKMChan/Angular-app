var mongoose = require('mongoose');
var showSetup = require('./show-controller.js');
var userSetup = require('./user-controller.js');

module.exports = function(app){
    mongoose.connect('mongodb://h2406496:h2406496@ds139715.mlab.com:39715/showtracker-app');

}