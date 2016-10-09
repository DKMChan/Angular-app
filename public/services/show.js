angular.module('MyApp')
.factory('Show', ['$resource', function($resource) {
    return $resource('/show-app/api/shows/:_id');
  }]);