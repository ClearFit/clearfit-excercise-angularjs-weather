/**
 * Defines the main AngularJS application.
 *
 * BONUS:
 *
 * Configure the $routeProvider to present "fiveday.html" template for a city
 * provided as a route param. This includes adding whatever necessary
 * controllers, services, etc to make it work. Have the list of cities on
 * "index.html" link to this new route.
 *
 */
var app = angular.module('cfAngularExercise', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'forecasts.html'
    })
    .otherwise({
      redirectTo: '/'
    });

}]);
