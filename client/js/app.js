'use strict';

angular.module('easycode-app', [
  
  'easycode-app.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/code.html', controller: 'CodeCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);