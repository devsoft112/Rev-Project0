angular.module("app").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<homepageview></homepageView>",
      })
      .when("/homepage", {
        template: "<homepageview></homepageView>",
      })
      .when("/about", {
        template: "<about></about>",
      })
      .when("/listing/:index", {
        template: "<listingdetails></listingdetails>",
      })
      .when("homepage/listing/:index", {
        template: "<listingdetails></listingdetails>",
      })
      .when("/error", {
        template: "<error></error>",
      })
      .otherwise("/error");
  },
]);
