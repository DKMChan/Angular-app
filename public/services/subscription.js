angular.module('MyApp')
  .factory('Subscription', ['$http', function($http) {
    return {
      subscribe: function(show, user) {
        return $http.post('/show-app/api/subscribe', { showId: show._id });
      },
      unsubscribe: function(show, user) {
        return $http.post('/show-app/api/unsubscribe', { showId: show._id });
      }
    };
  }]);