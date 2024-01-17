angular
    .module('about')
    .component('about', {
        templateUrl: 'about/about.template.html',
        controller: function myComponentController() {
            this.name = 'John Doe';
        }
    });