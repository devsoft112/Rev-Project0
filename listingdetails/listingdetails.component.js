angular
    .module('listingdetails')
    .component('listingdetails', {
        templateUrl: 'listingdetails/listingdetails.template.html',
        controller: ['$routeParams','$http', function myComponentController($routeParams, $http) {

            var self = this;

            var listingIndex = $routeParams.index;
            self.listing = [];

            var config = {
                url: "https://sandbox.repliers.io/listings/" + listingIndex,
                method: "GET",
                headers: {
                  "REPLIERS-API-KEY": "VMEs2eM1aBgCrM8tR9rG54Ve8hyRqo",
                  "Content-Type": "application/json",
                },
              };
        
              window.onload = function () {
                $http(config).then(
                  function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    self.listing = response.data;
                    console.log(response);
                  },
                  function errorCallback(response) {
                    // called asynchronously if an error occurs
                  }
                );
              };


        }]
    });