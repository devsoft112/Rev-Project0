angular
.module('homepage')
.component('homepage', {
    templateUrl: 'website/homepage/homepage.template.html',
    controller: function myComponentController() {
        this.name = 'John Doe';
    }
});