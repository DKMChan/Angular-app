angular.module('MyApp')
  .factory('Auth', ['$http', '$location', '$rootScope', '$cookieStore', '$alert',
    function($http, $location, $rootScope, $cookieStore, $alert) {
      $rootScope.currentUser = $cookieStore.get('user');
      $cookieStore.remove('user');

      return {
        login: function(user) {
          return $http.post('/show-app/api/login', user)
            .success(function(data) {
              $rootScope.currentUser = data;
              $location.path('/show-app');

              $alert({
                title: 'Cheers!',
                content: 'You have successfully logged in.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
            .error(function() {
              $alert({
                title: 'Error!',
                content: 'Invalid username or password.',
                placement: 'top-right',
                type: 'danger',
                duration: 3
              });
            });
        },
        signup: function(user) {
          return $http.post('/show-app/api/signup', user)
            .success(function() {
              $location.path('/show-app/login');

              $alert({
                title: 'Congratulations!',
                content: 'Your account has been created.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
            .error(function(response) {
              $alert({
                title: 'Error!',
                content: response.data,
                placement: 'top-right',
                type: 'danger',
                duration: 3
              });
            });
        },
        logout: function() {
          return $http.get('/show-app/api/logout').success(function() {
            $rootScope.currentUser = null;
            $cookieStore.remove('user');
            $alert({
              content: 'You have been logged out.',
              placement: 'top-right',
              type: 'info',
              duration: 3
            });
          });
        }
      };
    }]);