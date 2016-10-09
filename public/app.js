angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
.config(['$locationProvider','$routeProvider' , function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
        
    $routeProvider
      .when('/show-app',{ 
        templateUrl: 'views/home.html',
        controller: 'MainCtrl' 
    })
      .when('/show-app/shows/:id', {
        templateUrl: 'views/detail.html', 
        controller: 'DetailCtrl'
    })
      .when('/show-app/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/show-app/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/show-app/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/show-app'
      });
  }]);