/**
 * Main AngularJS controller.
 *
 * INSTRUCTIONS:
 *
 * On initialization populate the $scope.cities array with the list of city
 * weather data using the WeatherService.
 */
app.controller('MainController', ['$scope', 'WeatherService',
  function MainController($scope, WeatherService) {

    // Placeholder array of cities, to be populated by the WeatherService
    $scope.cities = [];

  }
]);
