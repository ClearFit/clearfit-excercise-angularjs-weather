/**
 * The Weather Service which is responsible for making REST API calls to get the
 * current weather for different cities.
 *
 * INSTRUCTIONS:
 *
 * Finish the methods defined in this service that uses the $http service to
 * make the defined REST API calls.
 *
 */
app.service('WeatherService', ['$http',
  function WeatherService($http) {

    /**
     * Calls HTTP GET /weather/index.json which returns the list of all cities and their
     * weather.
     *
     * See ./data/weather the cities and data structure.
     *
     * @return $q.promise
     */
    this.listCities = function() {

    };

    /**
     * Calls HTTP GET /weather/:city.json which returns the weather for the
     * specified city.
     *
     * See ./data/weather for available cities and data structure.
     *
     * @return $q.promise
     */
    this.getCity = function(city) {
      
    };

  }
]);
