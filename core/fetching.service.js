var serviceModule = angular.module('myServiceMethodService', []);

serviceModule.service('myServiceMethodService', function() {

    var self = this;
    
    var config = {
        url: "https://sandbox.repliers.io/listings?listings=true&operator=AND&sortBy=updatedOnDesc&status=A",
        method: "GET",
        headers: {
          "REPLIERS-API-KEY": "VMEs2eM1aBgCrM8tR9rG54Ve8hyRqo",
          "Content-Type": "application/json",
        },
      };

    self.getListings =  function () {
        $http(config).then(
          function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            return response.data.listings;
          },
          function errorCallback(response) {
            // called asynchronously if an error occurs
            return response.data.error
          }
        );
      };


});