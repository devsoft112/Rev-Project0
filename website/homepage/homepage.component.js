angular
.module('homepage')
.component('homepage', {
    templateUrl: 'website/homepage/homepage.template.html',
    controller: ['$http',function myComponentController() {

        var self = this;
        self.joke;
        

        this.listings = [
            {name: 'property1', value: "75,000,000"},
            {name: 'property2', value: "100,000,000"},
            {name: 'property3', value: "125,000,000"},
            {name: 'property4', value: "150,000,000"},
            {name: 'property5', value: "175,000,000"},

        ];
    }]
});