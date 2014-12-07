(function() {
  'use strict';
  var app = angular.module('OsraRoutes', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/orphans', {
        templateUrl: 'views/orphans.html'
      }).
      when('/partners', {
        templateUrl: 'views/partners.html'
      }).
      otherwise({
        templateUrl: 'views/orphans.html'
      });
  }]);
})();
