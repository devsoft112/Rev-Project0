angular
    .module('about')
    .component('about', {
        templateUrl: 'website/about/about.template.html',
        controller: function myComponentController() {
            this.name = 'John Doe';
        }
    });