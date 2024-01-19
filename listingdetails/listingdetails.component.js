angular.module("listingdetails").component("listingdetails", {
  templateUrl: "listingdetails/listingdetails.template.html",
  controller: [
    "$routeParams",
    "$http",
    function myComponentController($routeParams, $http) {
      var self = this;

      var listingIndex = $routeParams.index;
      const apiKey = "f38723a34f4747c9a92154330240701";
      self.listing = [];
      self.weather = [];

      var listingConfig = {
        url: "https://sandbox.repliers.io/listings/" + listingIndex,
        method: "GET",
        headers: {
          "REPLIERS-API-KEY": "VMEs2eM1aBgCrM8tR9rG54Ve8hyRqo",
          "Content-Type": "application/json",
        },
      };

      // Make the first API call (listing)
      $http(listingConfig).then(
        function successCallback(response) {
          self.listing = response.data;

          // Extract city information from the listing response
          var city = self.listing.address.city;

          // Use the city information in the second API call (weather)
          var weatherConfig = {
            url: `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };

          // Make the second API call (weather)
          $http(weatherConfig).then(
            function successCallback(response) {
              console.log(response);
              self.weather = response.data;
            },
            function errorCallback(response) {
              // Handle error for the weather API call
              console.log(response.error.message);
            }
          );
        },
        function errorCallback(response) {
          console.log("error here: " + response.error);
        }
      );
    },
  ],
});