angular.
  module('app').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/', {
        template: '<homepageview></homepageView>'
      }).
      when('/homepage', {
        template: '<homepageview></homepageView>'
      }).
        when('/about', {
          template: '<aboutview></aboutView>'
        }).
        when('/error', {
          template: '<error></error>'
        }).
        otherwise('/error');
    }
  ]);