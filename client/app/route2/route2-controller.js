// Always use an IIFE, i.e., (function() {})();
(function(){
    angular
        .module("ROUTE")                         // Call angular module
        .controller("Route2Ctrl", Route2Ctrl);  // angular.controller()
    Route2Ctrl.$inject = ["$state"];            // Dependecy injection

    function Route2Ctrl($state) {
        var vm = this;
    };

})();