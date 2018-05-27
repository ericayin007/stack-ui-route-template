// Always use an IIFE, i.e., (function() {})();
(function(){
    angular
        .module("ROUTE")                         // Call angular module
        .controller("Route5Ctrl", Route5Ctrl);  // angular.controller()
    Route5Ctrl.$inject = ["$state"];            // Dependecy injection

    function Route5Ctrl($state) {
        var vm = this;
    };

})();