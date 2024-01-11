angular
    .module('listings')
    .component('listings', {
        templateUrl: 'website/listings/listings.template.html',
        controller: function myComponentController() {
            this.name = 'John Doe';
        }
    });