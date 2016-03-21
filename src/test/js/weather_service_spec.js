/**
 * Spec for the WeatherService.
 *
 * DO NOT EDIT THIS FILE.
 */
describe('WeatherService', function() {

  var $httpBackend, WeatherService;

  beforeEach(module('cfAngularExercise'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    WeatherService = $injector.get('WeatherService');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('listCities calls the correct REST API call', function() {

    // Setup expected data
    var expectedCities = [{
      name: "Toronto",
      high: 15,
      low: 9,
      forecast: 'Sunny'
    }];

    // Setup REST API $http mock
    $httpBackend.expectGET('/weather/index.json').respond(200, expectedCities);

    // Call the WeatherService.listCities()
    WeatherService.listCities()
      .then(function(response) {
        // Expect results from the promise
        expect(response.data).toEqual(expectedCities);
      });

    // Push through the REST API mock
    $httpBackend.flush();

  });

  it('getCity calls the correct REST API call', function() {

    // Setup expected data
    var expectedCity1 = {
      name: "Toronto",
      high: 15,
      low: 9,
      forecast: 'Sunny'
    };

    var expectedCity2 = {
      name: "Montreal",
      high: 8,
      low: 2,
      forecast: 'Cloudy'
    };

    // Setup REST API $http mock
    $httpBackend.expectGET('/weather/toronto.json').respond(200, expectedCity1);
    $httpBackend.expectGET('/weather/montreal.json').respond(200, expectedCity2);

    // Call the WeatherService.getCity('toronto')
    WeatherService.getCity('toronto')
      .then(function(response) {
        // Expect results from the promise
        expect(response.data).toEqual(expectedCity1);
      });

    // Call the WeatherService.getCity('montreal')
    WeatherService.getCity('montreal')
      .then(function(response) {
        // Expect results from the promise
        expect(response.data).toEqual(expectedCity2);
      });

    // Push through the REST API mock
    $httpBackend.flush();

  });

});
