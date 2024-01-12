angular
    .module('navbar')
    .component('navbar', {
        templateUrl: 'website/navbar/navbar.template.html',
        controller: function myComponentController() {
            this.homepage = true;
            this.about = false;

            this.handleNav = function(e) {
                if(e.target.textContent == 'About Us') {
                    this.about = true;
                    this.homepage = false;   
                } else {
                    this.about = false;
                    this.homepage = true;
                }
            }
        }
    });