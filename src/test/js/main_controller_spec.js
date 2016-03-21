/**
 * Spec for the MainController.
 *
 * DO NOT EDIT THIS FILE.
 */
describe('MainController', function() {

  var $httpBackend, $rootScope;

  beforeEach(module('cfAngularExercise'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    $controller('MainController', {
      '$scope': $rootScope
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('on initialization it loads the weather for all cities to the $scope', function() {

    // Setup expected data
    var expectedCities = [{
      name: "Toronto",
      high: 15,
      low: 9,
      forecast: 'Sunny'
    }];

    // Setup REST API $http mock
    $httpBackend.expectGET('/weather/index.json').respond(200, expectedCities);
    $httpBackend.flush();

    // Assert the results
    expect($rootScope.cities).toEqual(expectedCities);

  });

});
