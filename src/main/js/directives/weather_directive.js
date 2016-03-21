/**
 * Weather Forecast directive.
 *
 * INSTRUCTIONS:
 *
 * Configure the directive to accept the following HTML markup:
 *
 * <city-weather city="city_name"></city-weather>
 *
 * Where "city_name" is the name of the city to lookup using the WeatherService.
 *
 * On initialization populate the $scope.weather variable with the weather data
 * for "city_name" from the WeatherService.
 */
app.directive('cityWeather', ['WeatherService',
  function CityWeatherDirective(WeatherService) {
    return {
      template: '<div class="city-weather"><strong class="name">{{ weather.name }}</strong> ' +
                '<span class="forecast">{{ weather.forecast }}</span> ' +
                '<emphasis class="temperature">{{ weather.high }} &#176;C</span></emphasis>',
      link: function($scope, element, attrs) {

        // Placeholder weather object, to be populated by the WeatherService
        $scope.weather = {};
        
      }
    };
  }
]);
