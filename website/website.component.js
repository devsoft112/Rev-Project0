angular
    .module('website')
    .component('website', {
        templateUrl: 'website/website.template.html',
        controller: function myComponentController() {
            this.name = 'John Doe';
        }
    });