// Always use an IIFE, i.e., (function() {})();
(function(){
    angular
        .module("ROUTE")                         // Call angular module
        .controller("Route3Ctrl", Route3Ctrl);  // angular.controller()
    Route3Ctrl.$inject = ["$state"];            // Dependecy injection

    function Route3Ctrl($state) {
        var vm = this;
    };

})();