// Always use an IIFE, i.e., (function() {})();
(function(){
    angular
        .module("ROUTE")                         // Call angular module
        .controller("Route1Ctrl", Route1Ctrl);  // angular.controller()
    Route1Ctrl.$inject = ["$state"];            // Dependecy injection

    function Route1Ctrl($state) {
        var vm = this;
    };

})();