# Getting Started

The goal of this exercise is to complete the skeleton code so that the the AngularJS application correctly displays the requested data and that Karma unit tests run "green."

To start you will need to complete some installation steps. You will be provided instructions on how to start and stop the build in web service as well as run the Karma unit tests.

After you have been able to complete the above follow the instructions provided on what code you need to complete.

## Installation

The following steps are required to install the project:

1. Install nodejs https://nodejs.org/

2. Type the following command from the root of this project:

  `npm install`

## Web Service

The web service serves up the AngularJS application as well as the mocked REST API.

When the web service is running the AngularJS application can be found at the following URL:

http://localhost:3333/

To start the web service type the following command from the root of this project:

  `npm start`

To stop the web service type `ctrl-c` to exit the process or browse to the following URL:

http://localhost:3333/close

## Karma Unit Tests

The Karma unit tests have been created to pass when the skeleton code has been completed.

To run the Karma unit tests type the following command from the root of this project:

  `npm test`

The unit tests will run immediately and the process will stay open. As you change the JavaScript in this project Karma will monitor the files and re-run the impacted unit tests.

To stop the Karma unit tests from running type `ctrl-c` to exit the process.

# Exercise Instructions

1. Complete `./src/main/js/services/weather_service.js`

  - Finish the methods defined in this service that uses the $http service to make the defined REST API calls.

2. Complete `./src/main/js/controllers/main_controller.js`

  - On initialization populate the $scope.cities array with the list of city weather data using the WeatherService.

3. Complete `./src/main/index.html`

  - Populate the list of cities and their temperatures from the
  MainController $scope.

4. Complete `./src/main/js/directives/weather_directive.js`

  - Configure the directive to accept the following HTML markup: `<city-weather city="city_name"></city-weather>`

  - Where "city_name" is the name of the city to lookup using the WeatherService.

  - On initialization populate the $scope.weather variable with the weather data for "city_name" from the WeatherService.

5. Add a CSS framework and style

  - Assume this might be a page as part of a news website and therefore design appropriately

  - Page should be attractive but not flashy, simple but not plain
  
6. BONUS:

  - Configure the $routeProvider to present "fiveday.html" template for a city provided as a route param. This includes adding whatever is necessary including controllers, services, template directives, etc to make it work. Have the list of cities on "index.html" link to this new route.
