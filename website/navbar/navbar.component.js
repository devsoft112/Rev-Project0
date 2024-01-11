angular
    .module('navbar')
    .component('navbar', {
        templateUrl: 'website/navbar/navbar.template.html',
        controller: function myComponentController() {
            this.name = 'John Doe';
        }
    });