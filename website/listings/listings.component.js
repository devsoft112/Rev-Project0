angular
    .module('listings')
    .component('listings', {
        templateUrl: 'website/listings/listings.template.html',
        controller: ['$http', function propertiesController($http) {

            var self = this;
            self.listings = [];
            var config = {
                url: 'https://sandbox.repliers.io/listings?listings=true&operator=AND&sortBy=updatedOnDesc&status=A',  // Replace with the actual API endpoint URL
                method: 'GET',  // Or any other HTTP method (POST, PUT, DELETE, etc.)
                headers: {
                  'REPLIERS-API-KEY': 'VMEs2eM1aBgCrM8tR9rG54Ve8hyRqo',  // Replace with your actual API key
                  'Content-Type': 'application/json'
                }
              };

           window.onload = function() {
                $http(config)
                .then(function successCallback(response) {
                  // this callback will be called asynchronously
                  // when the response is available
                  console.log(response);
                    self.listings = response.data.listings;
                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });
            }
            
        }]
    });